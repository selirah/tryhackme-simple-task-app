import axios from "axios";
import type { TaskPayloadT } from "../types/Task";

export const getTasks = async () => {
  return await axios.get("/tasks");
};

export const createTask = async (payload: TaskPayloadT) => {
  return await axios.post("/tasks/create", payload);
};

export const updateTask = async (taskId: string, payload: TaskPayloadT) => {
  return await axios.put(`/tasks/update/${taskId}`, payload);
};

export const deleteTask = async (taskId: string) => {
  return await axios.delete(`/tasks/delete/${taskId}`);
};
