import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form action="">
        <input
          type="text"
          className="task_input"
          placeholder="Enter Your Task"
        />

        <div className="task_form_buttom_line">

          <div className="tags"> 
            <Tag tagName = "HTML" />
            <Tag tagName = "CSS" />
            <Tag tagName = "JavaScript" />
            <Tag tagName = "React" />
          </div>

          <div>
            <select name="" id="" className="task_status">
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
