import React,{ useState,useEffect } from 'react'
import './App.css'
import { slides } from "./data/data";
import { backLog } from "./data/data";


const App = () => {
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(0)
  
  useEffect(() => {
    // if (celsius) {
    //   setFahrenheit(0)
    // }
    // if (!fahrenheit) {
    //   setCelsius(0)
    // }

    console.log(typeof(celsius))

  }, [celsius])
  

console.log(celsius)
  return (
    <>
    <h1>Celcius</h1>
    <input id='celsius' value={celsius}  onChange={(e)=>setCelsius(e.target.value)} type="text" />

{/* onChange={(e)=>setFahrenheit(e.target.value)} */}
    <h1>Fahrenheit</h1>
    <input id='fahrenheit' value={fahrenheit} onChange={(e)=>setFahrenheit(e.target.value)}  type="text" />


      


    </>
  ) 
};



export default App
