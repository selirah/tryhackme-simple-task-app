import Checkbox from "../Checkbox";
import MoreSVG from "../../assets/arrow_forward_ios.svg";
import { TaskT } from "../../types/Task";
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

  return (
    <div
      className={classnames("task-item", {
        "task-item--border-b": lastItem
      })}
    >
      <div className="task">
        <Checkbox name="check" />
        <h4 className="task-title">{task.title}</h4>
      </div>
      <button className="action" onClick={() => setSelectedTask(task)}>
        <img src={MoreSVG} alt="action icon" />
      </button>
    </div>
  );
};

export default TaskItem;
