import "dotenv/config";
import express from "express";
import cors from "cors";
import pino from "pino-http";

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  pino({
    level: "info",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "yyyy-MM-dd HH:MM:ss",
        ignore: "pid",
        hideObject: true,
        messageFormat:
          "{req.method} {req.url} {res.statusCode} - {responseTime}ms",
      },
    },
  }),
);

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Retrieved all notes",
  });
});

app.get("/notes/:noteId", (req, res) => {
  const noteId = req.params.noteId;
  res.status(200).json({
    message: `Retrieved note with ID: ${noteId}`,
  });
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
