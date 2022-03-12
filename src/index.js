import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './api/store'
import { BrowserRouter } from "react-router-dom";
import {
  LineController, LineElement,
  PointElement,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineController, LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Calculate = () => {
  const [first, setfirst] = useState(0)

  return (
    <>
    { 
   <script src="https://cointelegraph.com/news-widget" data-ct-widget-limit="5" data-ct-widget-theme="dark" data-ct-widget-size="small" data-ct-widget-language="en"></script>
}

    
    </>
  )

}


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      {/* <Calculate/> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);




const celInput = document.getElementById('celsius')
const fahInput = document.getElementById('fahrenheit')

      
celInput.addEventListener('keyup',()=>{
  if (celInput.value) {
    fahInput.value = celInput.value*(9/5)+32
  } else {
    fahInput.value =''
  }
})

fahInput.addEventListener('keyup',()=>{
  if (fahInput.value) {
  celInput.value = (fahInput.value - 32)*5/9
  } else {
    celInput.value =''
  }

})

