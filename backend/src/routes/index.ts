import { Router } from "express";
import userRoutes from "./user.route";
import taskRoutes from "./task.route";

const appRouter = Router();

appRouter.use("/user", userRoutes); // domain/api/v1/user
appRouter.use("/tasks", taskRoutes); // domain/api/v1/tasks

export default appRouter;
