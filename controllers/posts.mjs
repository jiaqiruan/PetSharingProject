import petMessage from "../db.mjs";
import { userMessage } from "../db.mjs";
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

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await petMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req,res)=>{
    const {name,age,photo,category,owner} = req.body;
    const newPet = new petMessage({name,age,photo,category,owner,creatorId: req.userId});
    console.log(newPet);
    try {
        await newPet.save();
        res.status(201).json(newPet);
    } catch (s) {
        console.log(error.message);
    }
}

export const updatePost = async (req,res)=>{
    const { id } = req.params;
    const { name,age,category,photo } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { name,age,category,photo, _id: id };

    await petMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    
    const { id } = req.params;

    //console.log("delete");


    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await petMessage.findByIdAndDelete(id);

    res.json({ message: "Post deleted successfully." });
}

export const feedPost = async (req, res) => {
    const { id } = req.params;


    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }
    else{
        const user = await userMessage.findById(req.userId);
        if(user.coins<=0){
            return res.json({message:"Not enough coin!"});
        } else{
            const updatedUser = await userMessage.findByIdAndUpdate(req.userId,{coins: user.coins - 1},{new:true});
        }
    }
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await petMessage.findById(id);

    const updatedPost = await petMessage.findByIdAndUpdate(id, { hunger: post.hunger + 5 }, { new: true });
    
    res.json(updatedPost);
}
