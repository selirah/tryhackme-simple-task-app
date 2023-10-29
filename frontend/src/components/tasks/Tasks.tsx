import type { TaskT } from "../../types/Task";
import TaskItem from "./TaskItem";
import EmptyTasks from "./EmptyTasks";
import { useTasks } from "../../hooks/useTasks";
import { useScreenSize } from "../../hooks/useScreenSize";
import classnames from "classnames";

type TasksProps = {
  tasks: TaskT[];
};

const Tasks = ({ tasks }: TasksProps) => {
  const screenSize = useScreenSize();
  const t = useTasks();

  return tasks.length ? (
    <div
      className={classnames("tasks", {
        "tasks--hide": t?.showTaskForm && screenSize?.screen === "mobile"
      })}
    >
      {tasks.map((task, idx) => (
        <TaskItem
          key={task._id}
          task={task}
          lastItem={idx !== tasks.length - 1}
        />
      ))}
    </div>
  ) : (
    <EmptyTasks />
  );
};

export default Tasks;
