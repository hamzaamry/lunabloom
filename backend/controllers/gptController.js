import axios from "axios";
import asyncHandler from "express-async-handler";



const userData = asyncHandler(async (req, res) => {
  try {
    const { domain, description, products, goals, resources } = req.body;

    //Prepare the input prompt for the chatGPT API request
    const prompt = `Domain: ${domain}\nDescription: ${description}\nProducts: ${products}\nGoals: ${goals}\nResources: ${resources}\n`;

    //Generate target audiance
    const targetAudiencePrompt = `${prompt} , what is the target audiance  for your domain based on these informations `;

    const targetAudienceResponse = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", {
      prompt: targetAudiencePrompt,
      max_tokens: 100,
      temperature: 0.7,
      // Add your OpenAI API key in the Authorization header
       headers: {
         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
       }
    });

    const targetAudience = targetAudienceResponse.data.choices[0].text.trim();

    console.log(targetAudience);

    // Generate platform selections
    const platformSelectionsPrompt = `${prompt} Which platforms should you focus on to promote your content? , based on these informations `;

    const platformSelectionsResponse = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", {
      prompt: platformSelectionsPrompt,
      max_tokens: 100,
      temperature: 0.7,
      // Add your OpenAI API key in the Authorization header
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    const platformSelections =
      platformSelectionsResponse.data.choices[0].text.trim();

    console.log(platformSelections);

    // Generate content type

    const contentTypePrompt = `${prompt}What type of content should you focus on to get more engagement?`;

    const contentTypeResponse = await axios.post("https://api.openai.com/v1/engines/davinci-codex/completions", {
      prompt: contentTypePrompt,
      max_tokens: 100,
      temperature: 0.7,
      // Add your OpenAI API key in the Authorization header
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    const contentType = contentTypeResponse.data.choices[0].text.trim();

    console.log(contentType);

    // Send the extracted information back as a response to the frontend
    res.status(200).json({
      targetAudience,
      platformSelections,
      contentType,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while getting data from chatgpt API" });
  }
});

export { userData };
