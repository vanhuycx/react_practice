import React,{ useState,useEffect } from 'react'
import { useGetFearGreedIndexQuery } from "./api";

const App = () => {

  const {data:fearGreedIndex} = useGetFearGreedIndexQuery({limit:10})
  console.log(fearGreedIndex)
  return (
    <>
    
    </>

  ) 
};



export default App
