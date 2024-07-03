import React from 'react'
import "./App.css"
import TaskForm from './assets/components/TaskForm'


const App = () => {
  return (
    // app structure
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>
        <section className="task_column">Section 1</section>
        <section className="task_column">Section 2</section>
        <section className="task_column">Section 3</section>
      </main>
    </div>
  )
}

export default App
