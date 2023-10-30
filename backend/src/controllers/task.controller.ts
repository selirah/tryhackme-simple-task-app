import { Request, Response } from "express";
import { TaskT } from "../types/Task";
import Task from "../models/Task";

// create task controller
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate } = req.body as TaskT;
    const task = new Task({
      title,
      description,
      dueDate,
      userId: res.locals?.jwtData?.id
    });
    await task.save();
    return res.status(201).json({ message: "Created", task });
  } catch (error) {
    console.log("CREATE TASK ERROR: ", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// retrieve list of tasks
export const getUserTasks = async (_: Request, res: Response) => {
  try {
    const tasks = await Task.find({ userId: res.locals?.jwtData?.id });
    return res.status(200).json({ message: "OK", tasks });
  } catch (error) {
    console.log("GET USER TASKS ERROR: ", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// updating an existing task
export const updateTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, description, dueDate, isCompleted } = req.body as TaskT;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task does not exist" });
    }
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.isCompleted = isCompleted;
    await task.save();
    return res.status(201).json({ message: "Updated", task });
  } catch (error) {
    console.log("UPDATE TASK ERROR: ", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// deleting a task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndRemove(id);
    console.log(id);
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log("DELETE TASK ERROR: ", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
