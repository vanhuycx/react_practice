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
          <input type="text" />
          <button>Create Task</button>
        </div>


        <div className="stages">
          <div>
            <h3>Backlog</h3>
            <Card/>
          </div>

          <div>
            <h3>To Do</h3>
            <Card/>
          </div>


          <div>
            <h3>Ongoing</h3>
            <Card/>
          </div>

          <div>
            <h3>Done</h3>
            <Card/>
          </div>

        </div>
      </div>


    </div>
    
    
    </>

  ) 
};



export default App
