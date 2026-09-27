import { Router } from "express";
import { Note } from "../models/note.js";
import createHttpError from "http-errors";

const notesRouter = Router();

notesRouter.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
});

notesRouter.get("/notes/:noteId", async (req, res) => {
  const noteId = req.params.noteId;
  const note = await Note.findById(noteId);
  if (!note) throw new createHttpError(404, "Note not found");
  res.status(200).json(note);
});

export default notesRouter;
