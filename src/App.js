import React,{ useState,useEffect,useCallback } from 'react'
import './App.css'
import { useGetCryptoQuery } from "./api/cryptoApi";

const App = () => {
  
  const array1 =  [1,2,3,4,5,6,7]

  const [numbe1,,number2,,...number3] = array1

console.log(number3)

  return (
    <>
  <p>{ number3}</p>

    </>
  ) 
};



export default App
