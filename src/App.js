import React,{ useState,useEffect } from 'react'
import './App.css'

const App = () => {

  return (
    <>
    <div className="web-container">
      <div className="nav-container">

        <div className="web-name">
          <div><h1>MIT</h1></div> 
          <div><h1>Technology</h1></div>
          <div><h1>Review</h1></div>

        </div>

        <div className="web-nav">
          <a href="/">Featured</a>
          <a href="/">Topics</a>
          <a href="/">Newsletters</a>
          <a href="/">Event</a>
          <a href="/">PodCast</a>
        </div>

        <div className="web-signin">
          <div className="signin">
            <a href="/">Sign in </a>
          </div>
          <div className="subscribe">
            <a href="/"> Subscribe </a>
          </div>
        </div>

      </div>

      <div className="content-container">
        <div className="content">
          Hello world
        </div>

      </div>

    </div>
  
    </>
  ) 
};



export default App
