import petMessage from "../db.mjs";
import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();

export const getPosts = async (req,res)=>{
    try {
        const petMessages = await petMessage.find();
        res.status(200).json(petMessages);
    } catch (error) {
        console.log(error.message);
    }
}
export const createPost = async (req,res)=>{
    const {name,age,photo,category} = req.body;
    console.log("???");
    console.log(req);
    const newPet = new petMessage({name,age,photo,category});
    try {
        await newPet.save();
        res.status(201).json(newPet);
    } catch (s) {
        console.log(error.message);
    }
}