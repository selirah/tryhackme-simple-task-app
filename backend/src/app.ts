import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import appRouter from "./routes/index.js";
config();
const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET || ""));

// This middleware should only be used in dev mode
// to track api calls during testing.
// Remove this in prod mode
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
