import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = (section) => { //props function
  return (
    <section className="task_column">
      <h2>{section.sectionName}</h2>
      <div className="tasks_section">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
      
    </section>
  );
};

export default TaskColumn;
