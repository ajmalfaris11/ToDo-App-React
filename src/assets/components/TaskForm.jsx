import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  // create state variable
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("todo");

  // function for take the task input 
  const handleTaskChange = e => {
    setTask(e.target.value);
  }

    // function for take the status input 
  const handleStatusChange = e => {
    setStatus(e.target.value);
  }

  console.log(task, status )

  return (
    <header className="app_header">
      <form action="">
        <input
          type="text"
          className="task_input"
          placeholder="Enter Your Task..."
          onChange={ handleTaskChange }
        />

        <div className="task_form_buttom_line">

          <div className="tags"> 
            <Tag tagName = "HTML" />
            <Tag tagName = "CSS" />
            <Tag tagName = "JavaScript" />
            <Tag tagName = "React" />
          </div>

          <div>
            <select name="" id="" className="task_status"
            onChange={handleStatusChange}>
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
