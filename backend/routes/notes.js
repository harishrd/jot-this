const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// Get all notes
router.get("/", async (req, res) => {
    // console.log("GET /notes");
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new note
router.post("/", async (req, res) => {
    const note = new Note({
        text: req.body.text,
        date: req.body.date,
    });

    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Delete Route
router.delete("/:id", async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        await Note.deleteOne({ _id: note._id });
        res.json({ message: "Note deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});



// Update a note
router.put("/:id", async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        note.text = req.body.text || note.text;
        note.date = req.body.date || note.date;

        const updatedNote = await note.save();
        res.json(updatedNote);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;