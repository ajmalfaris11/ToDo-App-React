import React, { useState } from "react";

import "./App.css";
import TaskForm from "./assets/components/TaskForm";
import TaskColumn from "./assets/components/TaskColumn";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // function for deleting the item
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex) //filter the task, 
    setTasks(newTasks)
  }
  return (
    // app structure
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn sectionName="🎯 To do" tasks={tasks} status="todo" handleDelete={handleDelete} />
        <TaskColumn sectionName="🌟 Doing" tasks={tasks} status="doing" handleDelete={handleDelete} />
        <TaskColumn sectionName="✔️ Done" tasks={tasks} status="done" handleDelete={handleDelete} />
      </main>
    </div>
  );
};

export default App;
