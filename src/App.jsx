import React, { useState } from 'react';

import "./App.css"
import TaskForm from './assets/components/TaskForm'
import TaskColumn from './assets/components/TaskColumn'


const App = () => {
  const [tasks, setTasks] = useState ([]);

  console.log("tasks", tasks)

  return (
    // app structure
    <div className='app'>
      <TaskForm setTasks = {setTasks}/>
      <main className='app_main'>
        <TaskColumn sectionName = "🎯 To do" tasks={tasks} status="todo" />
        <TaskColumn sectionName = "🌟 Doing" tasks={tasks} status="doing"/>
        <TaskColumn sectionName = "✔️ Done"  tasks={tasks} status="done"/>
      </main>
    </div>
  )
}

export default App
