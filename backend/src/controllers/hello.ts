import { Request, Response } from "express";

export const helloWord = async (req: Request, res: Response) => {
  return res.status(200).send("Hello world!");
};
