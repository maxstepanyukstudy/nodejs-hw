import createHttpError from "http-errors";
import { Note } from "../models/note.js";

// todo? getNotes is a better name
export async function getAllNotes(req, res) {
  const { search = "" } = req.query;

  const notes = await Note.find().where({
    $or: [
      { title: { $regex: search, $options: "i" } },
      { content: { $regex: search, $options: "i" } },
    ],
  });
  res.status(200).json({ notes });
}

export async function getNoteById(req, res) {
  const noteId = req.params.noteId;
  const note = await Note.findById(noteId);
  if (!note) throw new createHttpError(404, "Note not found");
  res.status(200).json(note);
}

export async function createNote(req, res) {
  const note = await Note.create(req.body);
  res.status(201).json(note);
}

export async function deleteNote(req, res) {
  const noteId = req.params.noteId;
  const note = await Note.findByIdAndDelete(noteId);
  if (!note) throw new createHttpError(404, "Note not found");
  res.status(200).json(note);
}

export async function updateNote(req, res) {
  const noteId = req.params.noteId;
  const note = await Note.findByIdAndUpdate(noteId, req.body, {
    returnDocument: "after",
  });
  if (!note) throw new createHttpError(404, "Note not found");
  res.status(200).json(note);
}
