import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {

  // create state variable for take value from inputs
  // this use state will work on task input and status input
  const [taskData, setTaskData] = useState({
    task:"",
    status:"todo",
    
  })

 const handleTaskChange = (e) => {
  const { name, value } = e.target;
  setTaskData((prev) => {
    return { ...prev, [name]: value };
  });
};

  const handleSubmit = (e) => {
    e.preventDefault(); //stop the reloading while submit the form
    console.log(taskData)
  };

  // create state variable
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // function for take the task input 
  // const handleTaskChange = e => {
  //   setTask(e.target.value);
  // }

  //   function for take the status input 
  // const handleStatusChange = e => {
  //   setStatus(e.target.value);
  // }

  // console.log(task, status )

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
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
            <select name="status" id="" className="task_status"
            onChange={handleTaskChange}
            >
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
