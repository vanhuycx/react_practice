import React,{ useState,useEffect } from 'react'
import './App.css'
import { slides } from "./data/data";

const App = () => {
  const [index, setIndex] = useState(0)

  const restartIndex = () => {
      setIndex(0)
    }
  const decreaseIndex = () => {
      setIndex(index=>index-1)
  }
  const increaseIndex = () => {
      setIndex(index=>index+1)
  }
  const buttons = document.getElementsByTagName('button')

  // console.log(buttons.length)
  useEffect(() => {
   

    if (index===slides.length-1) {
      document.getElementById('next-button').setAttribute('disabled',true)
    } else{
      document.getElementById('next-button').removeAttribute('disabled')
    }

    if (index===0) {
      document.getElementById('previous-button').setAttribute('disabled',true)
      document.getElementById('restart-button').setAttribute('disabled',true)
    } else{
      document.getElementById('previous-button').removeAttribute('disabled')
      document.getElementById('restart-button').removeAttribute('disabled')
    }

    for (let i=0;i<buttons.length;i++){
      if (!buttons[i].disabled) {
        buttons[i].style.color='black'
      } else {
        buttons[i].style  .color='white'
      }
    }


  }, [index,buttons])


  return (
    <>
    <div className="site-wrapper">
      <div className="main-content">
        <div className="buttons">
          <button id='restart-button' onClick={()=>restartIndex()}>Restart</button>
          <button id='previous-button' onClick={()=>decreaseIndex()}>Previous</button>
          <button id='next-button' onClick={()=>increaseIndex()}>Next</button>
        </div>
        <div className="slide-show">
          <h1>{slides[index].title}</h1>
          <h3>{slides[index].text}</h3>
        </div>
      </div>
      

    </div>
   
    </>

  ) 
};



export default App
