import asyncHandler from 'express-async-handler'
import User from '../models/usermodel.js'

import generateToken from '../utils/generateToken.js'


import { config } from "dotenv"
config()

import { Configuration , OpenAIApi } from "openai"



//@desc   Auth user/set token
//route   POST /api/users/auth
//@access Public

const authUser = asyncHandler( async (req , res) => {
   
    const { email , password } = req.body

    const user = await User.findOne({ email }) ;

    if(user && (await user.matchPassword(password))) {
        generateToken(res , user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }
})

//@desc   registartion user/set token
//route   POST /api/users/register
//@access Public

const registerUser = asyncHandler( async (req , res) => {

    const { name , email , password } = req.body

    const userExists = await User.findOne({ email }) ;

    if (userExists) {
        res.status(400);
        throw new Error('Email already used')
    } 

    const user = await User.create({
        name,
        email,
        password
    })

    if(user) {
        generateToken(res , user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }

})


//@desc   logout user
//route   POST /api/users/logout
//@access Public

const logoutUser = asyncHandler( async (req , res) => {

    res.cookie('jwt' , '' , {
        httpOnly: true,
        expires: new Date(0)
    } )
    res.status(200).json({ message: 'User logged out'})
})


// chatGPT controller 
//route   POST /api/users/results

const results = asyncHandler(async (req, res) => {

    const openai = new OpenAIApi (new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    }))
    

    try {

        //const { domain, description, products, goals, resources } = req.body

        const { domain , description , products , goals , resources } = req.body
        console.log ( domain )
        console.log ( description )
        console.log ( products )
        console.log ( goals )
        console.log ( resources )
       

        
         //Prepare the input prompt for the chatGPT API request
        const prompt = `Domain: ${domain}\nDescription: ${description}\nProducts: ${products}\nGoals: ${goals}\nResources: ${resources}\n`;

        //Generate target audiance
        const targetAudiencePrompt = `${prompt} , what is the target audiance based on these informations `;

        const targetAudienceResponse = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo' ,
            messages: [{ role: 'user' , content: `${targetAudiencePrompt}`}]
        })

            const targetAudience = targetAudienceResponse.data.choices[0].message.content
            console.log(targetAudience)


            // Generate platform selections
            const platformSelectionsPrompt = `${prompt} Which platforms should you focus on to promote your content? , based on these informations `;

            const platformSelectionsResponse = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo' ,
                messages: [{ role: 'user' , content: `${platformSelectionsPrompt}`}]
            })
                const platformSelections = platformSelectionsResponse.data.choices[0].message.content
                console.log(platformSelections)



            // Generate content type

            const contentTypePrompt = `${prompt} , what type of content should i focus on to get more engagement `

            const contentTypeResponse = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo' ,
                messages: [{ role: 'user' , content: `${contentTypePrompt}`}]
            })
                const contentType = contentTypeResponse.data.choices[0].message.content
                console.log(contentType)
            

                const data = {
                    targetAudience: targetAudience,
                    platformSelections: platformSelections,
                    contentType: contentType,
                  };


            res.status(200).json(data);


    } catch {
        console.error(error);
        res.status(400).json({message: 'something went wrong'})
    }
})


export {
    authUser ,
    registerUser,
    logoutUser ,
    results
}





