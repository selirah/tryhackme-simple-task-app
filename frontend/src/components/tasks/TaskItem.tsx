import Checkbox from "../Checkbox";
import MoreSVG from "../../assets/arrow_forward_ios.svg";
import { TaskPayloadT, TaskT } from "../../types/Task";
import classnames from "classnames";
import { useTasks } from "../../hooks/useTasks";

type TaskItemProps = {
  task: TaskT;
  lastItem: boolean;
};

const TaskItem = ({ task, lastItem }: TaskItemProps) => {
  const tasks = useTasks();

  const setSelectedTask = (task: TaskT) => {
    tasks?.onSetTask(task);
    tasks?.onShowTaskForm(true);
  };

  const onSetCompleteTask = async (checked: boolean, task: TaskT) => {
    const { title, description, dueDate, _id } = task;
    const payload: TaskPayloadT = {
      title,
      description,
      dueDate,
      isCompleted: checked ? true : false
    };
    await tasks?.updateUserTask(_id, payload);
  };

  return (
    <div
      className={classnames("task-item", {
        "task-item--border-b": lastItem
      })}
    >
      <div className="task">
        <Checkbox
          name={task.title}
          value={task._id}
          onChange={(e) => onSetCompleteTask(e.target.checked, task)}
          checked={task.isCompleted}
        />
        <button
          className={classnames("task-title", {
            "task-title--strike": task.isCompleted
          })}
          onClick={() => setSelectedTask(task)}
        >
          {task.title}
        </button>
      </div>
      <button className="action" onClick={() => setSelectedTask(task)}>
        <img src={MoreSVG} alt="action icon" />
      </button>
    </div>
  );
};

export default TaskItem;
