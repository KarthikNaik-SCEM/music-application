import express from "express"
import MusicEntry from "../models/musicEntry.js";

const musicRoutes=express.Router()

// Retrieve Songs   
musicRoutes.get("/musicentries", async (req, res) => {
    try {
        const songs = await MusicEntry.find();
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
        if (!musicfile || !musicTitle || !isPublic) {
            return res.status(400).json({ error: "Insufficient details to create music entry" });
        }
        const musicDetails = { musicfile, musicTitle, isPublic };
        const createdMusic = await MusicEntry.create(musicDetails);
        return res.status(201).json(createdMusic);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Update Songs
musicRoutes.put("/musicentry/:id", async (req, res) => {
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

// Delete Songs
musicRoutes.delete("/musicentry/:id", async (req, res) => {
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

