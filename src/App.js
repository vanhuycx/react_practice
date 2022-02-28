import React,{ useState,useEffect } from 'react'


const App = () => {
  const [cTime, setcTime] = useState(new Date().toLocaleTimeString())

useEffect(() => {
  setTimeout(() => {
    setcTime(new Date().toLocaleTimeString())


  }, 1000);
}, [cTime])


  return (
    <>
    <h1>The current time is {cTime} </h1>

    </>

  ) 
};



export default App
