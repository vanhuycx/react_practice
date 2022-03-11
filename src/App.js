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
  

  useEffect(() => {
    if (index===slides.length-1) {
      document.getElementById('next-button').setAttribute('disabled',true)
    } else{
      document.getElementById('next-button').removeAttribute('disabled')
    }

    if (index===0) {
      document.getElementById('previous-button').setAttribute('disabled',true)
    } else{
      document.getElementById('previous-button').removeAttribute('disabled')
    }
  }, [index])
  

  console.log(slides.length,index)

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
