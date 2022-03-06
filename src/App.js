import React,{ useState,useEffect } from 'react'
import './App.css'


const App = () => {
  return (
    <>

    <div className="app-container">
      <div className="header">
        Chania
      </div>

      <div className="main">
        <div className="section">

          <div className="menu">
            <a href="goog" target='_blank'>The Flight</a>
            <a href="goog" target='_blank'>The City</a>
            <a href="goog" target='_blank'>The Island</a>
            <a href="goog" target='_blank'>The Food</a>
          </div>

          <div className="content">
            <h3>The City</h3>
            <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>       
          </div>     
        </div>


        <div className="aside">
          <div>
            <h3>What</h3>
            <p>Chania is a city on the island of Crete.</p>
          </div>
          <div>
            <h3>Where?</h3>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
          </div>
          <div>
            <h3>How?</h3>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>

          
        </div>
        
      </div>

      <div className="footer">
      Resize the browser window to see how the content respond to the resizing.
        
      </div>
    </div>
    
    
    </>

  ) 
};



export default App
