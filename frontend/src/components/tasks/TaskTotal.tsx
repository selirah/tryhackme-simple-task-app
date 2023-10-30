import Button from "../Button";
import AddSVG from "../../assets/add.svg";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useTasks } from "../../hooks/useTasks";

const SubHeader = () => {
  const screenSize = useScreenSize();
  const tasks = useTasks();

  const onCreateNewTask = () => {
    tasks?.onSetTask(null);
    tasks?.onShowTaskForm(true);
  };

  return (
    <div className="sub-nav">
      <h4 className="total-tasks">Tasks ({tasks?.tasks.length})</h4>
      <Button
        size={screenSize?.screen === "mobile" ? "sm" : "md"}
        onClick={onCreateNewTask}
      >
        <div className="button-content">
          <img src={AddSVG} alt="add icon" />
          <span>Add New Task</span>
        </div>
      </Button>
    </div>
  );
};

export default SubHeader;
