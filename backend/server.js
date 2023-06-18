import  express  from "express";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js'

dotenv.config()

import { notFound , errorHandler } from "./middleware/errormiddleware.js";
import connectDB from "./config/db.js";

import cookieParser from "cookie-parser";

import  cors  from "cors";


connectDB()

const port = process.env.PORT || 5000

const app = express()

app.use(cors());

app.use(express.json()) // to use the body-parser ( to get the data from req.body )
app.use(express.urlencoded({ extended: true })) // to got the form data

app.use('/api/users' , userRoutes)

app.get('/' , ( req , res ) => res.send('Server is ready') )

app.use(notFound)
app.use(errorHandler)

app.use(cookieParser())

app.listen(port, () => console.log( `Server running on port ${port} 🔥`));