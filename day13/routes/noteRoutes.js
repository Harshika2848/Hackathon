const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.json(note);
});

// Read all
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Read one
router.get("/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
});

// Update
router.put("/:id", async (req, res) => {
  const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

module.exports = router;
