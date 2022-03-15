import React,{ useState,useEffect } from 'react'
import './App.css'

const App = () => {

  const myFunction = (x)=> {
    document.getElementsByClassName('container')[0].classList.toggle("change")


    // x.classList.toggle('hello')
  }

  return (
    <>
    <div className="overlay">
        <div className="content">
          Hi there
        </div>

      </div>

      

    <div className="web-container">
      

      <div className="nav-container">

      <div className="container" onClick={()=>myFunction()}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

        <div className="web-name">
          <div>MIT</div> 
          <div>Technology</div>
          <div>Review</div>

        </div>

        <div className="web-nav">
          <a href="/">Featured</a>
          <a href="/">Topics</a>
          <a href="/">Newsletters</a>
          <a href="/">Events</a>
          <a href="/">PodCasts</a>
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
