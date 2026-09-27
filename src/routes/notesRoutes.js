import { Router } from "express";
import {
  createNote,
  getAllNotes,
  getNoteById,
} from "../controllers/notesController.js";

const notesRouter = Router();

notesRouter.get("/notes", getAllNotes);
notesRouter.post("/notes", createNote);
notesRouter.get("/notes/:noteId", getNoteById);

export default notesRouter;
