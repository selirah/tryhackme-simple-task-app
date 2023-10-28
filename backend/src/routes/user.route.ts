import { Router } from "express";
import { validate } from "../middlewares/validator.js";
import {
  loginValidation,
  signupValidation
} from "../utils/request-validation.js";
import {
  userLogin,
  userSignup,
  verifyUser
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verify-token.js";

const userRoutes = Router();

userRoutes.post("/signup", validate(signupValidation), userSignup);
userRoutes.post("/login", validate(loginValidation), userLogin);
userRoutes.get("/verify-user", verifyToken, verifyUser);

export default userRoutes;
