import { connect, disconnect } from "mongoose";

export async function connectDB() {
  try {
    await connect(process.env.MONGODB_URL || "");
  } catch (error) {
    throw new Error("Cannot connect DB");
  }
}

export async function disconnectDB() {
  try {
    await disconnect();
  } catch (error) {
    throw new Error("Connect disconnect DB");
  }
}
