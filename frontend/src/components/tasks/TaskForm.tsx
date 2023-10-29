import CloseSVG from "../../assets/close.svg";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import { useScreenSize } from "../../hooks/useScreenSize";

const TaskForm = () => {
  const screenSize = useScreenSize();
  return (
    <div className="task-form-container">
      <div className="header">
        <h4 className="task-title">New Task</h4>
        <button className="close">
          <img src={CloseSVG} alt="close icon" />
        </button>
      </div>
      <div className="task-form">
        <form>
          <div className="input-group">
            <Input
              name="title"
              label="Title*"
              placeholder="Enter title of task..."
            />
          </div>
          <div className="input-group">
            <Textarea
              name="description"
              label="Description*"
              placeholder="Enter description of task..."
            />
          </div>
          <div className="input-group">
            <Input
              name="dueDate"
              label="Due Date*"
              placeholder="Enter date of completion..."
            />
          </div>
          <div className="button-group">
            <Button
              type="submit"
              color="primary"
              size={screenSize?.screen === "mobile" ? "sm" : "md"}
            >
              Add Task
            </Button>
            <Button
              type="button"
              color="error"
              size={screenSize?.screen === "mobile" ? "sm" : "md"}
            >
              Delete Task
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
