import React,{ useState,useEffect } from 'react'
import './App.css'
import {Routes,Route,Link } from "react-router-dom";
import City from "./components/City";
import Flight from './components/Flight'
import Island from './components/Island'
import Food from './components/Food'
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <>


    <div className="app-container">
      <div className="header">
        <h1>Chania</h1>
      </div>

      <div className="main">
        <div className="section">

          <div className="menu">
            <Link to='/flight'>The Flight</Link>
            <Link to='/city'>The City</Link>
            <Link to='/island'>The Island</Link>
            <Link to='/food'>The Food</Link>
            
          </div>

          <div className="content">
            <Routes>
            <Route path='/' element={<Flight />}/>
              <Route path='/flight' element={<Flight />}/>

              <Route path='/city' element={<City />}/>

              <Route path='/island' element={<Island />}/>

              <Route path='/food' element={<Food />}/>
              <Route path='*' element={<NotFound />}/>
   
            </Routes>


          </div>


        </div>


        <div className="aside">
          <div>
            <h3>What?</h3>
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
