import { ReactNode, createContext, useState } from "react";
import type { TaskPayloadT, TaskT } from "../types/Task";
import { AxiosError } from "axios";
import { getTasks, createTask, deleteTask, updateTask } from "../apis/tasks";

type Task = {
  tasks: TaskT[];
  error: string;
  loading: boolean;
  isSubmitting: boolean;
  getUserTasks: () => Promise<void>;
  createUserTask: (payload: TaskPayloadT) => Promise<void>;
  updateUserTask: (taskId: string, payload: TaskPayloadT) => Promise<void>;
  deleteUserTask: (taskId: string) => Promise<void>;
};

const TasksContext = createContext<Task | null>(null);

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskT[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const getUserTasks = async () => {
    try {
      setLoading(true);
      const res = await getTasks();
      if (res.data) {
        setLoading(false);
        setTasks(res.data.tasks);
      }
    } catch (error) {
      setLoading(false);
      const err = error as AxiosError;
      if (err.response && err.response.data) {
        const { data } = err.response;
        setError(JSON.stringify(data));
      }
    }
  };

  const createUserTask = async (payload: TaskPayloadT) => {
    try {
      setError("");
      setSubmitting(true);
      const res = await createTask(payload);
      if (res.data) {
        setLoading(false);
        setTasks((tasks) => [...tasks, ...res.data.task]);
      }
    } catch (error) {
      setSubmitting(false);
      const err = error as AxiosError;
      if (err.response && err.response.data) {
        const { data } = err.response;
        setError(JSON.stringify(data));
      }
    }
  };

  const updateUserTask = async (taskId: string, payload: TaskPayloadT) => {
    try {
      setError("");
      setSubmitting(true);
      const res = await updateTask(taskId, payload);
      if (res.data) {
        setSubmitting(false);
        const copyTasks = [...tasks];
        copyTasks.filter((task) => task._id !== taskId);
        copyTasks.push(res.data.task);
        setTasks(copyTasks);
      }
    } catch (error) {
      setSubmitting(false);
      const err = error as AxiosError;
      if (err.response && err.response.data) {
        const { data } = err.response;
        setError(JSON.stringify(data));
      }
    }
  };

  const deleteUserTask = async (taskId: string) => {
    try {
      setError("");
      setSubmitting(true);
      const res = await deleteTask(taskId);
      if (res.data) {
        setSubmitting(false);
        setTasks((tasks) => tasks.filter((task) => task._id !== taskId));
      }
    } catch (error) {
      setSubmitting(false);
      const err = error as AxiosError;
      if (err.response && err.response.data) {
        const { data } = err.response;
        setError(JSON.stringify(data));
      }
    }
  };

  const filterTasks = async (param: "active" | "completed" | "expired") => {
    switch (param) {
      case "active":
        setTasks((tasks) =>
          tasks.filter((task) => new Date(task.dueDate) >= new Date())
        );
        break;
      case "completed":
        setTasks((tasks) => tasks.filter((task) => task.isCompleted === true));
        break;
      case "expired":
        setTasks((tasks) =>
          tasks.filter((task) => new Date(task.dueDate) < new Date())
        );
        break;
      default:
        await getUserTasks();
        break;
    }
  };

  const value = {
    tasks,
    error,
    loading,
    getUserTasks,
    createUserTask,
    updateUserTask,
    deleteUserTask,
    filterTasks,
    isSubmitting
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
