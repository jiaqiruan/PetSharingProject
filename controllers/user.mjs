import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { userMessage } from '../db.mjs';

export const signin = async (req,res)=>{
    //console.log(req.body);
    const {email, password} = req.body;
    try {
        const existingUser = await userMessage.findOne({email});
        if(!existingUser){
            return res.status(404).send({message:"user doesn't exist"});
        }
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect){
            return res.status(400).send({message:"invalid credentials"});
        }
        const token = jwt.sign({email:existingUser.email, id:existingUser._id},"test",{expiresIn:"1h"});

        res.status(200).json({result:existingUser,token});
    } catch (error) {
        res.status(500).send({message:"something went wrong"});
        console.log(error);
    }
}

export const signup = async (req,res)=>{
    //console.log(req.body);
    const {email,password,firstName,lastName,confirmPassword} = req.body;
    try {

        const existingUser = await userMessage.findOne({email});
        if(existingUser){
            return res.status(400).send({message:"user already exist"});
        }
        if(password!==confirmPassword){
            return res.status(400).send({message:"password don't match"});
        }

        const hashPassword = await bcrypt.hash(password,12);
        const result = await userMessage.create({email,password:hashPassword,name:`${firstName} ${lastName}`});

        const token = jwt.sign({email:result.email, id:result._id},"test",{expiresIn:"1h"});
        //console.log(token);
        res.status(200).json({result,token});

    } catch (error) {
        
        res.status(500).send({message:"something went wrong"});
        console.log(error);
    }
}