import { HttpError } from "http-errors";

export async function errorHandler(err, req, res, next) {

  if (err instanceof HttpError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  // no NODE_ENV isProduction check
  res.status(500).json({
    message: err.message,
  });
}
