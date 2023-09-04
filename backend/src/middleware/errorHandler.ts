// errorHandler.ts
import { Request, Response, NextFunction } from "express";
import CustomError from "../utils/customError";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", err);

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  res.status(500).json({ error: "Internal server error" });
};

export default errorHandler;
