import { Router } from "express";
import { validate } from "../middlewares/validator";
import { loginValidation, signupValidation } from "../utils/request-validation";
import {
  userLogin,
  userLogout,
  userSignup,
  verifyUser
} from "../controllers/user.controller";
import { verifyToken } from "../middlewares/verify-token";

const userRoutes = Router();

userRoutes.post("/signup", validate(signupValidation), userSignup);
userRoutes.post("/login", validate(loginValidation), userLogin);
userRoutes.get("/verify-user", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;
