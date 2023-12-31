import { Request, Response } from "express";
import { SignupT } from "../types/Signup";
import User from "../models/User";
import bcrypt from "bcryptjs";
import { clearCookie, createCookie } from "../utils/cookie-manager";
import { createToken } from "../utils/token-manager";
import { LoginT } from "../types/Login";

// User Signup Controller
export const userSignup = async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body as SignupT;
    // check if user exists
    const alreadyUser = await User.findOne({ email });
    if (alreadyUser) {
      return res.status(401).json({ message: "User already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    // We are not verifying user since it's a simple app so we authenticate user directly
    // We first clear cookie
    clearCookie(res);
    // Create Token
    const token = createToken(user._id.toString(), user.email);
    // Create Cookie
    createCookie(res, token);
    return res.status(201).json({
      message: "Created",
      user: { name: user.name, email: user.email }
    });
  } catch (error) {
    console.log("USER SIGNUP ERROR: ", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// User Login Controller
export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as LoginT;
    // Get User
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }
    // Verify password
    const checkPass = await bcrypt.compare(password, user.password);
    if (!checkPass) {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }
    clearCookie(res);
    const token = createToken(user._id.toString(), user.email);
    createCookie(res, token);
    return res
      .status(200)
      .json({ message: "OK", user: { name: user.name, email: user.email } });
  } catch (error) {
    console.log("USER LOGIN ERROR: ", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Verify User Token
export const verifyUser = async (_: Request, res: Response) => {
  try {
    const user = await User.findById(res.locals?.jwtData?.id);
    if (!user) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    // Compare IDs
    if (user._id.toString() !== res.locals?.jwtData?.id) {
      return res.status(401).json({ message: "Unmatched Permissions!" });
    }

    return res
      .status(200)
      .json({ message: "OK", user: { name: user.name, email: user.email } });
  } catch (error) {
    console.log("USER VERIFY TOKEN ERROR: ", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Logout User
export const userLogout = async (_: Request, res: Response) => {
  try {
    const user = await User.findById(res.locals?.jwtData?.id);
    if (!user) {
      return res.status(401).json({ message: "Invalid Token!" });
    }
    // Compare IDs
    if (user._id.toString() !== res.locals?.jwtData?.id) {
      return res.status(401).json({ message: "Unmatched Permissions!" });
    }

    clearCookie(res);

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log("USER VERIFY TOKEN ERROR: ", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
