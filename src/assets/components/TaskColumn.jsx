import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ sectionName, tasks, status, handleDelete }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);
  
  const getStatusConfig = (status) => {
    const configs = {
      todo: { icon: "🎯", color: "#667eea", gradient: "linear-gradient(135deg, #667eea 0%, #ae75f9ff 100%)" },
      doing: { icon: "⚡", color: "#f093fb", gradient: "linear-gradient(135deg, #f5576c 0%, #f468efff 100%)" },
      done: { icon: "✅", color: "#4facfe", gradient: "linear-gradient(135deg, #4ffeb5ff 0%, #00f2fe 100%)" },
    };
    return configs[status] || configs.todo;
  };

  const config = getStatusConfig(status);

  return (
    <section className="task_column">
      <div className="task_column_header" style={{ background: config.gradient }}>
        <div className="status_icon">{config.icon}</div>
        <div className="header_text">
          <h2 className="task_column_title">{sectionName}</h2>
          <span className="task_count">{filteredTasks.length} tasks</span>
        </div>
      </div>

      <div className="tasks_section">
        {filteredTasks.length === 0 ? (
          <div className="empty_state">
            <div className="empty_icon">📝</div>
            <p className="empty_text">No tasks yet</p>
          </div>
        ) : (
          filteredTasks.map((task, index) => {
            const taskIndex = tasks.findIndex((t) => t === task);
            return (
              <TaskCard
                key={task.id || taskIndex}
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={taskIndex}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default TaskColumn;