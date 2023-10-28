import { Router } from "express";
import userRoutes from "./user.route.js";
import taskRoutes from "./task.route.js";

const appRouter = Router();

appRouter.use("/user", userRoutes); // domain/api/v1/user
appRouter.use("/tasks", taskRoutes); // domain/api/v1/tasks

export default appRouter;
