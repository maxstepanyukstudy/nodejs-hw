import "dotenv/config";
import express from "express";
import cors from "cors";
import dns from "node:dns";
import { connectMongoDB } from "./db/connectMongoDB.js";
import { logger } from "./middleware/logger.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { Note } from "./models/note.js";
import createHttpError from "http-errors";
// import notesRouter from "./routes/notesRoutes.js";
// 1 use db
// 2 refactor
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(logger);
app.use(express.json());
app.use(cors());

// app.use("/notes", notesRouter); //todo mv there

app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
});

app.get("/notes/:noteId", async (req, res) => {
  const noteId = req.params.noteId;
  const note = await Note.findById(noteId);
  if (!note) throw new createHttpError(404, "Note not found");
  res.status(200).json(note);
});

app.use(notFoundHandler);

app.use(errorHandler);

connectMongoDB();

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
