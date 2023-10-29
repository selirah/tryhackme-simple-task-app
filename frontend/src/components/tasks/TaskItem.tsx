import Checkbox from "../Checkbox";
import MoreSVG from "../../assets/arrow_forward_ios.svg";

const TaskItem = () => {
  return (
    <div className="task-item task-item--border-b">
      <div className="task">
        <Checkbox name="check" />
        <h4 className="task-title">Buy groceries</h4>
      </div>
      <button className="action">
        <img src={MoreSVG} alt="action icon" />
      </button>
    </div>
  );
};

export default TaskItem;
