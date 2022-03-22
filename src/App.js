import React,{ useState,useEffect,useCallback } from 'react'
import './App.css'
import { useGetCryptoQuery } from "./api/cryptoApi";

const App = () => {
  
  const array1 =  [1,2,3,4]

  const [numbe1,...number2] = array1

  



  return (
    <>
  <p>{' ' + number2}</p>

    </>
  ) 
};



export default App
