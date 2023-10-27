import { Router } from "express";
import helloRoutes from "./hello-routes.js";

const appRouter = Router();

appRouter.use("/hello", helloRoutes);

export default appRouter;
