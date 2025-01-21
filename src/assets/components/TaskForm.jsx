import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => ({ ...prev, tags: filterTags }));
    } else {
      setTaskData((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskData.task.trim()) return;
    
    setTasks((prev) => [...prev, { ...taskData, id: Date.now() }]);
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit} className="task_form">
        <div className="input_wrapper">
          <input
            type="text"
            name="task"
            value={taskData.task}
            className="task_input"
            placeholder="What needs to be done?"
            onChange={handleTaskChange}
            autoComplete="off"
          />
        </div>

        <div className="task_form_bottom">
          <div className="tags_container">
            <span className="tags_label">Tags:</span>
            <div className="tags">
              <Tag
                tagName="HTML"
                selectTag={selectTag}
                selected={checkTag("HTML")}
              />
              <Tag
                tagName="CSS"
                selectTag={selectTag}
                selected={checkTag("CSS")}
              />
              <Tag
                tagName="JavaScript"
                selectTag={selectTag}
                selected={checkTag("JavaScript")}
              />
              <Tag
                tagName="React"
                selectTag={selectTag}
                selected={checkTag("React")}
              />
            </div>
          </div>

          <div className="form_actions">
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleTaskChange}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              <span className="submit_icon">+</span>
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;