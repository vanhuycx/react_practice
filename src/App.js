import React,{ useState,useEffect } from 'react'
import './App.css'
import { slides } from "./data/data";

const taskNames = [{'backlog':[]},{'todo':[]},{'ongoing':[]},{'done':[]}]

const App = () => {
  const [taskName, setTaskName] = useState('Task1')


  const Card = () => {
    return  (
      <>
      <div className="card">
        <div className="left-section">
          Task
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
          <input type="text" placeholder="Enter new task name" onChange={(e)=>setTaskName(e.target.value)}/>
          <button onClick={()=>taskNames[0]['backlog'].push(taskName)}>Create Task</button>
        </div>

        {console.log(taskNames)}


        <div className="stages">
          <div className="stage">
            <h2>Backlog</h2>
            <Card/>
            <Card/>

          </div>

          <div className="stage">
            <h2>To Do</h2>

          </div>


          <div className="stage">
            <h2>Ongoing</h2>

          </div>

          <div className="stage">
            <h2>Done</h2>

          </div>

        </div>
      </div>


    </div>
    
    
    </>

  ) 
};



export default App
