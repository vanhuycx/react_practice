import React,{ useState,useEffect } from 'react'


const App = () => {
  const getCurrentTime =() => {
    return new Date().toLocaleTimeString()
  }
  const [textValue, setTextValue] = useState('Hello World')
  const [showTextValue, setShowTextValue] = useState(false)

  useEffect(() => {
    if (showTextValue) {
      setTextValue('Hello World')
    } else {
      setTextValue('')
    }
    
  }, [showTextValue])
  


  return (
    <>
    <button className="clichHere" onClick={()=>setShowTextValue(!showTextValue)}>click here</button>

    <input type="text" value={textValue} />

    </>

  ) 
};



export default App
