import React,{ useState,useEffect } from 'react'
import './App.css'
import { slides } from "./data/data";


const App = () => {
  const [taskName, setTaskName] = useState('Task1')


  const Card = () => {
    return  (
      <>
      <div className="card">
        <div className="left-section">
          {taskName}
        </div>
        <div className="right-section">
          <button><i class='fas'>&#xf104;</i></button>
          <button><i class='fas'>&#xf105;</i></button>
          <button><i class="fa">&#xf014;</i></button>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
    <div className="site-wrapper">
        <h1>Kaban Board</h1>


      <div className="main-content">
        <div className="new-task">
          <input type="text" placeholder="Enter new task name"/>
          <button>Create Task</button>
        </div>


        <div className="stages">
          <div className="stage">
            <h2>Backlog</h2>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

          </div>

          <div className="stage">
            <h2>To Do</h2>
            <Card/>
          </div>


          <div className="stage">
            <h2>Ongoing</h2>
            <Card/>
          </div>

          <div className="stage">
            <h2>Done</h2>
            <Card/>
          </div>

        </div>
      </div>


    </div>
    
    
    </>

  ) 
};



export default App
