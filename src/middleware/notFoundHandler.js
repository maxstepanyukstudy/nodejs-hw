import createHttpError from "http-errors";

export function notFoundHandler(req, res) {
  throw new createHttpError(404, "Route not found");
}
