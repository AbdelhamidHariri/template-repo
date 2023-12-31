import { NextFunction, Request, Response } from "express";

export const errorHandler =
  (controller: (req: Request<any>, res: Response) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
    } catch (error) {
      next(error);
    }
  };
