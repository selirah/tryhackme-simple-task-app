import { NextFunction, Request, Response } from "express";
import { COOKIE_NAME } from "../utils/constants.js";
import jwt from "jsonwebtoken";

// This middleware verifies the user's token for every authorized request made
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.signedCookies[`${COOKIE_NAME}`];
  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Invalid Token" });
  }
  return new Promise<void>((resolve, reject) => {
    return jwt.verify(token, process.env.JWT_SECRET, (error, success) => {
      if (error) {
        reject(error.message);
        return res.status(401).json({ message: "Token Expired" });
      } else {
        resolve();
        res.locals.jwtData = success;
        return next();
      }
    });
  });
};
