import React, { useEffect, useState } from "react";

import "./App.css";
import TaskForm from "./assets/components/TaskForm";
import TaskColumn from "./assets/components/TaskColumn";

// store datas to recover after reloading the website
const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks);
 
// store datas to local storage and restore old datas from local storage
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(()=> {localStorage.setItem("tasks", JSON.stringify(tasks))}, [tasks])

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
