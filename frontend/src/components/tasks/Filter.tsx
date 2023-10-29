import Badge from "../Badge";
import { useTasks } from "../../hooks/useTasks";
import { useScreenSize } from "../../hooks/useScreenSize";
import classnames from "classnames";

const Filter = () => {
  const screenSize = useScreenSize();
  const tasks = useTasks();

  const filterTasks = async (param?: "active" | "completed" | "expired") => {
    await tasks?.getUserTasks(param);
  };

  return (
    <div
      className={classnames("filter-container", {
        "filter-container--hide":
          tasks?.showTaskForm && screenSize?.screen === "mobile"
      })}
    >
      <Badge color="warning" onClick={() => filterTasks()}>
        All
      </Badge>
      <Badge color="info" onClick={() => filterTasks("active")}>
        Active
      </Badge>
      <Badge color="success" onClick={() => filterTasks("completed")}>
        Completed
      </Badge>
      <Badge color="error" onClick={() => filterTasks("expired")}>
        Expired
      </Badge>
    </div>
  );
};

export default Filter;
