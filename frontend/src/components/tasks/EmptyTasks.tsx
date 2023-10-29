import NoteSVG from "../../assets/note_add.svg";

const EmptyTasks = () => {
  return (
    <div className="empty-tasks">
      <img src={NoteSVG} alt="note add" />
      <h4>No tasks record can be found.</h4>
    </div>
  );
};

export default EmptyTasks;
