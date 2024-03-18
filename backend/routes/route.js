import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
// import {body,validationResult} from "express-validator"

dotenv.config()
// import { signUp } from "../controller/user-controller.js";

const route=express.Router()

route.post("/signup",async (req,res)=>{
    try {
        // console.log(user)

        const salt= await bcrypt.genSalt(10);
        const securePass=await bcrypt.hash(req.body.password,salt)

        const newUser={
            name:req.body.name,
            username:req.body.username,
            password:securePass,

        }
        
        const user= await User.create(newUser);
        
        const data ={
            user:{
                id:user.id
            }
        }

        // const authToken= jwt.sign(data,process.env.JWT_STRING);
        const authToken= jwt.sign(data,"karthikisaG$oodBoy");






        res.status(200).json({"success":true,authToken});
    } catch (error) {
        res.status(500).json({"success":false,error:"error in creating a user"});
        console.log(error)
        
    }
    
})

route.post('/login',async(req,res)=>{
    try {
        const {username,password}=req.body;

        const user=await User.findOne({username:username});

        if (!user){
            return res.status(500).json({"success":false,error:"invalid username or password"});
        }

        const passwordCompare= await bcrypt.compare(password,user.password);

        if (!passwordCompare)
        {
            return res.status(500).json({"success":false,error:"invalid username or password"});
        }

        const data ={
            user:{
                id:user.id
            }
        }

        const authToken= jwt.sign(data,process.env.JWT_STRING);

        res.status(200).json({"success":true,authToken});

        
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
})


export default route;