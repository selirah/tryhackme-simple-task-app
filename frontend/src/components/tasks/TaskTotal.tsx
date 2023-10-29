import Button from "../Button";
import AddSVG from "../../assets/add.svg";
import { useScreenSize } from "../../hooks/useScreenSize";

const SubHeader = () => {
  const screenSize = useScreenSize();
  return (
    <div className="sub-nav">
      <h4 className="total-tasks">Tasks (5)</h4>
      <Button size={screenSize?.screen === "mobile" ? "sm" : "md"}>
        <div className="button-content">
          <img src={AddSVG} alt="add icon" />
          <span>Add New Task</span>
        </div>
      </Button>
    </div>
  );
};

export default SubHeader;
