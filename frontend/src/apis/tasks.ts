import axios from "axios";
import type { TaskPayloadT } from "../types/Task";

export const getTasks = async () => {
  return axios.get("/tasks");
};

export const createTask = async (payload: TaskPayloadT) => {
  return axios.post("/tasks/create", payload);
};

export const updateTask = async (taskId: string, payload: TaskPayloadT) => {
  return axios.put(`/tasks/update/${taskId}`, payload);
};

export const deleteTask = async (taskId: string) => {
  return axios.delete(`/tasks/delete/${taskId}`);
};
