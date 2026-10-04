import { Router } from "express";
import { celebrate } from "celebrate";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesController.js";
import {
  getAllNotesSchema,
  noteIdSchema,
} from "../validation/noteValidation.js";

const notesRouter = Router();

notesRouter.get("/notes", celebrate(getAllNotesSchema), getAllNotes);
notesRouter.post("/notes", createNote);
notesRouter.get("/notes/:noteId", celebrate(noteIdSchema), getNoteById);
notesRouter.delete("/notes/:noteId", celebrate(noteIdSchema), deleteNote);
notesRouter.patch("/notes/:noteId", updateNote);

export default notesRouter;
