import React from "react";
import "./TaskColumn.css";

const TaskColumn = (section) => { //props function
  return (
    <section className="task_column">
      <h2>{section.sectionName}</h2>
    </section>
  );
};

export default TaskColumn;
