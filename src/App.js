import React,{ useState,useEffect } from 'react'
import './App.css'
import { slides } from "./data/data";
import { backLog } from "./data/data";


const App = () => {
  const [backLogTask, setBackLogTask] = useState([])
  const [index, setIndex] = useState(0)
  const [taskName, setTaskName] = useState()

  // setAllTaskNames(taskNames)
  // console.log({allTaskNames})
  const removeCard = ({id,array}) => {
    setBackLogTask(array.filter(item=>item['id']!==id))
    
  }

  const moveCardRight = () => {

  }


  const Card = ({name,id,array}) => {
    return  (
      <>
      <div className="card">
        <div className="left-section">
          {name}
        </div>
        <div className="right-section">
          <button><i class='fas'>&#xf104;</i></button>
          <button onClick={()=>moveCardRight({id,array})}><i class='fas'>&#xf105;</i></button>
          <button onClick={()=>removeCard({id,array})}><i class="fa">&#xf014;</i></button>
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
          <button onClick={()=>{
            taskName&&
            setBackLogTask((backLogTask)=>[...backLogTask,{'id':index,'name':taskName}])
            setIndex((index)=>index+1)
          }
          }>Create Task</button>

          {console.log({backLogTask,index})}
        </div>

       


        <div className="stages">
          <div id='backlog' className="stage">
            <h2>Backlog</h2>
            {backLogTask.map((item,index,array)=>(
              item &&
              <Card name={item.name} id={item.id} array={array} />
            ))}

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
