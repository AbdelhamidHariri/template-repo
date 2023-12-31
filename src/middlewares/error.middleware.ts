import { Application, Response, Request, NextFunction } from "express";
import { API_ERROR } from "../lib/api.error";

export function errorMiddleware(app: Application) {
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof API_ERROR) {
      res.status(err.statusCode || 500).json({
        message: err.message,
        code: err.code,
      });
    } else {
      res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
      });
    }
  });
}
