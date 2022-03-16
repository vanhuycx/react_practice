import React,{ useState,useEffect,useCallback } from 'react'
import './App.css'
import { useGetCryptoQuery } from "./api/cryptoApi";

const App = () => {
  
  const [sortOrder, setSortOrder] = useState('smallest')

  const {data:cryptos} = useGetCryptoQuery()
  console.log({cryptos})
  
  const [cryptoArray, setCryptoArray] = useState()

  const sortCryptos = (sortOrder) => {

    if (sortOrder==='smallest'){
      setCryptoArray(cryptos?.slice().sort((a,b)=>a.current_price-b.current_price))
    } else {
      setCryptoArray(cryptos?.slice().sort((a,b)=>b.current_price-a.current_price))
    }

  }


  useEffect(() => {
   
    sortCryptos(sortOrder)
    
  }, [sortOrder,cryptos])
  



  return (
    <>
    <h1>Sort order: {sortOrder}</h1>
    <select defaultValue={'latest'} onChange={(e)=>setSortOrder(e.target.value)}>
      <option value="smallest">Smallest to Biggest</option>
      <option value="biggest">Biggest to Smallest</option>
    </select>

    {cryptoArray?.map(coin=> (
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
