import React,{ useState,useEffect } from 'react'


const App = () => {
  const  element = document.createElement('script') 
  
  element.src='https://widgets.coingecko.com/coingecko-coin-ticker-widget.js'
  element.async = true;
  document.body.appendChild(element)


  return (
    <>
    <h1>Fear and Greed index by Chart JS </h1>
    <p>Bitcoin</p>


    <coingecko-coin-ticker-widget  coin-id="bitcoin" currency="usd" locale="en"></coingecko-coin-ticker-widget> 

    </>

  ) 
};



export default App
