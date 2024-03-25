import express from "express"
import MusicEntry from "../models/musicEntry.js";
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"

const musicRoutes=express.Router()

// Retrieve Songs   
musicRoutes.get("/musicentries", async (req, res) => {
    try {

        const token=req.header("auth-token");
        if(!token){
            res.status(401).send({error:"please authenticate using valid token"})
        }
        
        const data=jwt.verify(token,process.env.JWT_STRING);    


        const songs = await MusicEntry.find({uploaderName:data.user.id});
        return res.status(200).json(songs);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Retrieve All Public Songs   
musicRoutes.get("/publicmusicentries", async (req, res) => {
    try {

        const token=req.header("auth-token");
        if(!token){
            res.status(401).send({error:"please authenticate using valid token"})
        }
        
        const data=jwt.verify(token,process.env.JWT_STRING);    


        const songs = await MusicEntry.find({isPublic:true});
        return res.status(200).json(songs);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});


// Create Songs
musicRoutes.post("/musicentry", async (req, res) => {
    try {
        const { musicfile, musicTitle, isPublic } = req.body;
        if (!musicfile || !musicTitle) {
            return res.status(400).json({ error: "Insufficient details to create music entry" });
        }
        
        const token=req.header("auth-token");
        if(!token){
            res.status(401).send({error:"please authenticate using valid token"})
        }
        
        const data=jwt.verify(token,process.env.JWT_STRING);    
        
        const musicDetails = { musicfile, musicTitle,uploaderName:data.user.id, isPublic };

        const createdMusic = await MusicEntry.create(musicDetails);
        return res.status(201).json(createdMusic);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Update Songs
musicRoutes.put("/musicupdate/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { musicfile, musicTitle, isPublic } = req.body;
        const updatedMusic = await MusicEntry.findByIdAndUpdate(id, { musicfile, musicTitle, isPublic }, { new: true });
        if (!updatedMusic) {
            return res.status(404).json({ error: "Music entry not found" });
        }
        return res.status(200).json(updatedMusic);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Increment no. of saves in Song
musicRoutes.put("/musicnoofsaves/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let { noOfSaves } = req.body;
        noOfSaves++
        const updatedNoOfSaves = await MusicEntry.findByIdAndUpdate(id, { noOfSaves }, { new: true });
        if (!updatedNoOfSaves) {
            return res.status(404).json({ error: "Music entry not found" });
        }
        return res.status(200).json(updatedNoOfSaves);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Delete Songs
musicRoutes.delete("/musicdelete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMusic = await MusicEntry.findByIdAndDelete(id);
        if (!deletedMusic) {
            return res.status(404).json({ error: "Music entry not found" });
        }
        return res.status(200).json({ message: "Music entry deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
    
export default musicRoutes;

