import { Response } from "express";
import { COOKIE_NAME } from "./constants";

// Create Cookie
export const createCookie = (res: Response, token: string) => {
  const expires = new Date();
  // 24 hours
  expires.setDate(expires.getDate() + 1);
  res.cookie(COOKIE_NAME, token, {
    path: "/",
    domain: "localhost",
    expires,
    httpOnly: true,
    signed: true,
    secure: true
  });
};

// Clear Cookie
export const clearCookie = (res: Response) => {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    secure: true,
    domain: "localhost",
    signed: true,
    path: "/"
  });
};
