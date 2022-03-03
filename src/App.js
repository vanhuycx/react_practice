import React,{ useState,useEffect } from 'react'
import { useGetFearGreedIndexQuery } from "./api/fearGreedApi";
import { useGetNewsQuery } from "./api/newsApi";

const App = () => {

  const {data:newsData} = useGetNewsQuery({searchTerm:'crypto'})
  console.log(newsData)

  return (
    <>
    
    </>

  ) 
};



export default App
