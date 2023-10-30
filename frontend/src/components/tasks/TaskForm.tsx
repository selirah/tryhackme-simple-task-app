import { useState, useEffect, FormEvent } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useTasks } from "../../hooks/useTasks";
import classnames from "classnames";
import CloseSVG from "../../assets/close.svg";
import Checkbox from "../Checkbox";
import { toast } from "react-hot-toast";
import { TaskPayloadT } from "../../types/Task";
import Datepicker from "../Datepicker";
import Loader from "../Loader";
import { formatDate } from "../../utils";

const TaskForm = () => {
  const screenSize = useScreenSize();
  const tasks = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [isCompleted, setCompleted] = useState(false);

  const onCloseTaskForm = () => {
    tasks?.onSetTask(null);
    tasks?.onShowTaskForm(false);
  };

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      toast.error("Task title is required", { id: "task" });
      return;
    }
    if (!dueDate) {
      toast.error("Date of completion is required", { id: "task" });
      return;
    }

    const payload: TaskPayloadT = {
      title,
      description,
      dueDate: formatDate(dueDate),
      isCompleted
    };

    if (tasks?.task) {
      await tasks?.updateUserTask(tasks.task?._id, payload);
    } else {
      await tasks?.createUserTask(payload);
      setTitle("");
      setDescription("");
      setDueDate(null);
    }
  };

  const onHandleDeleteTask = async () => {
    if (tasks?.task) {
      await tasks?.deleteUserTask(tasks.task?._id);
    }
  };

  useEffect(() => {
    if (tasks?.task) {
      setTitle(tasks.task.title);
      setDescription(tasks.task.description);
      setDueDate(new Date(tasks.task.dueDate));
      setCompleted(tasks.task.isCompleted);
    }
  }, [tasks?.task]);

  return (
    <div
      className={classnames("task-form-container", {
        "task-form-container--show": tasks?.showTaskForm
      })}
    >
      <div className="header">
        <h4 className="task-title">Task</h4>
        <button className="close" onClick={onCloseTaskForm}>
          <img src={CloseSVG} alt="close icon" />
        </button>
      </div>
      <div className="task-form">
        <form onSubmit={onHandleSubmit} role="form">
          <div className="input-group">
            <Input
              name="title"
              label="Title*"
              placeholder="Enter title of task..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-group">
            <Textarea
              name="description"
              label="Description*"
              placeholder="Enter description of task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="input-group">
            <Datepicker
              name="dueDate"
              label="Due Date*"
              placeholder="Enter date of completion..."
              value={dueDate}
              onChange={setDueDate}
              minDate={new Date()}
            />
          </div>
          {tasks?.task ? (
            <div className="input-group">
              <Checkbox
                name="isCompleted"
                value={isCompleted ? 1 : 0}
                checked={isCompleted}
                onChange={(e) => setCompleted(e.target.checked)}
                label="Mark task as completed"
              />
            </div>
          ) : null}
          <div className="button-group">
            <Button
              type="submit"
              color="primary"
              size={screenSize?.screen === "mobile" ? "sm" : "md"}
              block={screenSize?.screen === "mobile"}
              disabled={tasks?.isSubmitting}
            >
              <div className="btn-content">
                {tasks?.isSubmitting ? <Loader size="md" /> : null}{" "}
                <span>{tasks?.task ? "Save Changes" : "Add Task"}</span>
              </div>
            </Button>
            {tasks?.task ? (
              <Button
                type="button"
                color="error"
                size={screenSize?.screen === "mobile" ? "sm" : "md"}
                block={screenSize?.screen === "mobile"}
                onClick={onHandleDeleteTask}
                disabled={tasks?.isSubmitting}
              >
                Delete Task
              </Button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
