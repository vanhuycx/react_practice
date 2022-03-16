import React,{ useState,useEffect,useCallback } from 'react'
import './App.css'
import { useGetCryptoQuery } from "./api/cryptoApi";

const App = () => {
  
  const [sortOrder, setSortOrder] = useState('smallest')

  const {data:cryptos} = useGetCryptoQuery({price_change_percentage:'1h,24h,7d',pollingInterval:30000})


  const sortedCryptos = cryptos?.slice().sort((a,b) => (
    sortOrder==='smallest'?
    a.current_price-b.current_price:
    (sortOrder==='biggesst'&&b.current_price-a.current_price)
  ))

  console.log({sortedCryptos})
 



  return (
    <>
    <h1>Sort order: {sortOrder}</h1>
    <select defaultValue={'latest'} onChange={(event)=>setSortOrder(event.target.value)}>
      <option value="smallest">Smallest to Biggest</option>
      <option value="biggest">Biggest to Smallest</option>
    </select>

    {sortedCryptos?.map(coin=> (
      <>  
      <h1>{coin.id}</h1>  
      <p>{coin.current_price}</p>
      
      </>
    )

    )}

    


    </>
  ) 
};



export default App
