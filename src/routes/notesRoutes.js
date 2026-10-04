import { Router } from "express";
import { celebrate } from "celebrate";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";
import { getAllNotesSchema } from "../validation/noteValidation.js";

const notesRouter = Router();

notesRouter.get("/notes", celebrate(getAllNotesSchema), getAllNotes);
notesRouter.post("/notes", createNote);
notesRouter.get("/notes/:noteId", getNoteById);
notesRouter.delete("/notes/:noteId", deleteNote);
notesRouter.patch("/notes/:noteId", updateNote);

export default notesRouter;
