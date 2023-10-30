import { Router } from "express";
import { validate } from "../middlewares/validator";
import { taskValidation } from "../utils/request-validation";
import {
  createTask,
  getUserTasks,
  updateTask,
  deleteTask
} from "../controllers/task.controller";
import { verifyToken } from "../middlewares/verify-token";

const taskRoutes = Router();

taskRoutes.get("/", verifyToken, getUserTasks);
taskRoutes.post("/create", validate(taskValidation), verifyToken, createTask);
taskRoutes.put(
  "/update/:id",
  validate(taskValidation),
  verifyToken,
  updateTask
);
taskRoutes.delete("/delete/:id", verifyToken, deleteTask);

export default taskRoutes;
