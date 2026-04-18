import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Load env FIRST
dotenv.config({
  path: "./.env"
});

// THEN run DB connection
connectDB();





/*
import express from "express";
const app=express();



(async () => {
    try {
        await mongoose.connect(`${process.env.MONDODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRRR:",error);
            throw error
        })


        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
    catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;  
    }
})()

*/
