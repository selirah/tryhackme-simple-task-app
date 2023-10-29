import { ReactNode, createContext, useState } from "react";
import type { TaskPayloadT, TaskT } from "../types/Task";
import { AxiosError } from "axios";
import { getTasks, createTask, deleteTask, updateTask } from "../apis/tasks";

type Task = {
  tasks: TaskT[];
  task: TaskT | null;
  error: string;
  loading: boolean;
  isSubmitting: boolean;
  getUserTasks: (param?: "active" | "completed" | "expired") => Promise<void>;
  createUserTask: (payload: TaskPayloadT) => Promise<void>;
  updateUserTask: (taskId: string, payload: TaskPayloadT) => Promise<void>;
  deleteUserTask: (taskId: string) => Promise<void>;
  showTaskForm: boolean;
  onShowTaskForm: (v: boolean) => void;
  onSetTask: (value: TaskT | null) => void;
};

const TasksContext = createContext<Task | null>(null);

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskT[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [task, setTask] = useState<TaskT | null>(null);

  const getUserTasks = async (param?: "active" | "completed" | "expired") => {
    try {
      setLoading(true);
      const res = await getTasks();
      if (res.data) {
        const tasks = res.data.tasks as TaskT[];
        setLoading(false);
        if (param === "active") {
          const filteredTasks = tasks.filter(
            (task) => new Date(task.dueDate) >= new Date()
          );
          setTasks(filteredTasks);
        } else if (param === "completed") {
          const filteredTasks = tasks.filter(
            (task) => task.isCompleted === true
          );
          setTasks(filteredTasks);
        } else if (param === "expired") {
          const filteredTasks = tasks.filter(
            (task) => new Date(task.dueDate) < new Date()
          );
          setTasks(filteredTasks);
        } else {
          setTasks(tasks);
        }
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

  const onShowTaskForm = (v: boolean) => {
    setShowTaskForm(v);
  };

  const onSetTask = (v: TaskT | null) => {
    setTask(v);
  };

  const value = {
    tasks,
    error,
    loading,
    getUserTasks,
    createUserTask,
    updateUserTask,
    deleteUserTask,
    isSubmitting,
    showTaskForm,
    onShowTaskForm,
    task,
    onSetTask
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
