import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./assets/components/TaskForm";
import TaskColumn from "./assets/components/TaskColumn";

const App = () => {
  const oldTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn 
          sectionName="To Do" 
          tasks={tasks} 
          status="todo" 
          handleDelete={handleDelete} 
        />
        <TaskColumn 
          sectionName="Doing" 
          tasks={tasks} 
          status="doing" 
          handleDelete={handleDelete} 
        />
        <TaskColumn 
          sectionName="Done" 
          tasks={tasks} 
          status="done" 
          handleDelete={handleDelete} 
        />
      </main>
    </div>
  );
};

export default App;
