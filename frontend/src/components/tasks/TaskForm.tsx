import React, { useState, useEffect } from "react";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useTasks } from "../../hooks/useTasks";
import classnames from "classnames";
import CloseSVG from "../../assets/close.svg";

const TaskForm = () => {
  const screenSize = useScreenSize();
  const tasks = useTasks();

  const onCloseTaskForm = () => {
    tasks?.onSetTask(null);
    tasks?.onShowTaskForm(false);
  };

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
              block={screenSize?.screen === "mobile"}
            >
              Add Task
            </Button>
            {tasks?.task ? (
              <Button
                type="button"
                color="error"
                size={screenSize?.screen === "mobile" ? "sm" : "md"}
                block={screenSize?.screen === "mobile"}
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
