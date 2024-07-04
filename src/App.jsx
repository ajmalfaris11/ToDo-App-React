import React from 'react'
import "./App.css"
import TaskForm from './assets/components/TaskForm'
import TaskColumn from './assets/components/TaskColumn'


const App = () => {
  return (
    // app structure
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>
        <TaskColumn sectionName = "🎯 To do"  />
        <TaskColumn sectionName = "🌟 Doing"  />
        <TaskColumn sectionName = "✔️ Done"  />
      </main>
    </div>
  )
}

export default App
