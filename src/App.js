import React,{ useState,useEffect,useCallback } from 'react'
import './App.css'
import { useGetCryptoQuery } from "./api/cryptoApi";

const App = () => {
  
  const array1 =  [1,2,3,4,5,6,7]
  const array2 =  [2,15,68,7,89,69,71]

  const  array3 = [...array1]

console.log(array3.sort((a,b)=>b-a))
array3.push(3)
console.log(array3)
  return (
    <>
  <p>{ array3}</p>
  <p>{ array1}</p>


    </>
  ) 
};



export default App
