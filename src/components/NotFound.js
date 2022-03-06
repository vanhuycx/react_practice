import React from 'react'
import { Link } from "react-router-dom"
const NotFound = () => {
  return (

    <>
        <h1>Your page is Not Found!</h1>
        <Link to='/'>Back to home</Link>
    </>
  
  )
}

export default NotFound