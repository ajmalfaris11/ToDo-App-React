import React from 'react'
import "./App.css"


const App = () => {
  return (
    // app structure
    <div className='app'>
      <header className='app_header'>Header Section</header>
      <main className='app_main'>
        <section className="task_column"></section>
        <section className="task_column"></section>
        <section className="task_column"></section>
      </main>
    </div>
  )
}

export default App
