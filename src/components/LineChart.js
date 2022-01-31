import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({chartData}) => {
  return (
    <div>

    <Line
        data={
             chartData
            // {
            //     labels: ['Jun', 'Jul', 'Aug'],
            //     datasets: [
            //       {
            //         id: 1,
            //         label: '',
            //         data: [5, 6, 7],
            //       },
            //       {
            //         id: 2,
            //         label: '',
            //         data: [3, 2, 1],
            //       },
            //     ],
            //   }
        //     {
        //     labels: xValues,
        //     datasets: [{
        //       data: yValues
        //     }]
        //   }
        }
    />
  
    {/* //   {
    //     labels: ['Jun', 'Jul', 'Aug'],
    //     datasets: [
    //       {
    //         id: 1,
    //         label: '',
    //         data: [5, 6, 7],
    //       },
    //     //   {
    //     //     id: 2,
    //     //     label: '',
    //     //     data: [3, 2, 1],
    //     //   },
    //     ],
    //   } */}
  
  
  
    </div>
  )
  
};

export default LineChart;
