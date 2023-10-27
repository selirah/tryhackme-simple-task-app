import { Router } from "express";
import { helloWord } from "../controllers/hello.js";

const helloRoutes = Router();

helloRoutes.get("/", helloWord);

export default helloRoutes;
