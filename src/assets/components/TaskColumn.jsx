import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({sectionName,tasks, status}) => { //props function
  return (
    <section className="task_column">
      <h2>{sectionName}</h2>
      <div className="tasks_section">
        {
          tasks.map((task, index) => task.status === status && <TaskCard key={index} title={task.task} tags={task.tags}  />)
        }
      </div>
      
    </section>
  );
};

export default TaskColumn;
