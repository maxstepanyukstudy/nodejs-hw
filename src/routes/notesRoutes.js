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
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
} from "../validation/noteValidation.js";

const notesRouter = Router();

notesRouter.get("/notes", celebrate(getAllNotesSchema), getAllNotes);
notesRouter.post("/notes", celebrate(createNoteSchema), createNote);
notesRouter.get("/notes/:noteId", celebrate(noteIdSchema), getNoteById);
notesRouter.delete("/notes/:noteId", celebrate(noteIdSchema), deleteNote);
notesRouter.patch("/notes/:noteId", updateNote);

export default notesRouter;
