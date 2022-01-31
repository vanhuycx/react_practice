import React,{ useState,useEffect } from 'react'
import { Line } from "react-chartjs-2";

import LineChart from "./components/LineChart";
// import {useGetFearGreedApiQuery} from './api'


const convert2Date = ({timestamp})=> {
  let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)
  return date
}


const App = () => {
  const [chartData, setChartData] = useState({});
  
  // const data = useGetFearGreedApiQuery();
  // console.log(data)


  //Fetch fear and greed data from https://api.alternative.me/fng/ and setChartData
  useEffect(() => {
   
    const fetchIndex = async () => {
      const response = await fetch('https://api.alternative.me/fng/?limit=10&date_format=us')
      const {data:data} = await response.json()
      console.log(data)
      // setChartData(data.map((data)=>console.log(data.timestamp)))

      setChartData({
        labels: data?.map((data)=>convert2Date(data.timestamp)),
        datasets: [
          {
            
            // label: 'Fear and Greed Index in the last 10 days',
            data: data?.map((data)=>data.value),
          }
        ]

      })

    };
    fetchIndex();
  }, []);

  console.log(chartData)


  
  return (
    <>
    <h1>Fear and Greed index by Chart JS </h1>
    <LineChart chartData={chartData}/>
    </>

  ) 
};



export default App
