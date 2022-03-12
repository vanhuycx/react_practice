import React,{ useState,useEffect } from 'react'
import './App.css'

const App = () => {
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(0)
  

  return (
    <>
    <h1>Celcius</h1>
    <input id='celsius' value={celsius}   onChange={(e)=>setCelsius(e.target.value)} type="text" />

    <h1>Fahrenheit</h1> 
    <input id='fahrenheit' value={fahrenheit} onChange={(e)=>setFahrenheit(e.target.value)}  type="text" />

    </>
  ) 
};



export default App
