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
    return res.status(401).json({ message: "Token not Received" });
  }
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      res.locals.jwtData = verify;
      return next();
    }
  } catch (_) {
    return res.status(401).json({ message: "Token Expired" });
  }
};
