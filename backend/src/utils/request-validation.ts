import { body } from "express-validator";

export const loginValidation = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Email should be a valid email address"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password should contain at least 6 characters")
];

export const signupValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  ...loginValidation
];

export const taskValidation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("dueDate").trim().isDate().withMessage("Due date must be a valid date")
];
