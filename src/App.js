import React,{ useState,useEffect } from 'react'
import './App.css'
import { articles } from "./data/data";
const App = () => {
  // const articles = articles

  // console.log(articles.slice())
  const [sortVoteOrder, setSortVoteOrder] = useState('')
  const [sortDateOrder,setSortDateOrder] = useState('')

  const [availArticles, setAvailArticles] = useState(articles)

  const sortVotes = () => {
    if (sortVoteOrder==='') {
      setSortVoteOrder('Descending')
        const sortedVotes = articles.slice().sort((a,b)=>(b.upvotes-a.upvotes))
        setAvailArticles(sortedVotes)
    } else if (sortVoteOrder==='Descending')  {
      setSortVoteOrder('Ascending')
        const sortedVotes = articles.slice().sort((a,b)=>(a.upvotes-b.upvotes))
        setAvailArticles(sortedVotes)
    } else if (sortVoteOrder==='Ascending') {
      setSortVoteOrder('')
        setAvailArticles(articles)
    }
  }

  const sortDates = () => {
    if (sortDateOrder==='') {
      setSortDateOrder('Descending')
      const sortedDates = articles.slice().sort((a,b)=>(new Date(b.date)- new Date(a.date)))
    setAvailArticles(sortedDates)
  } else if (sortDateOrder==='Descending')  {
      setSortDateOrder('Ascending')
      const sortedDates = articles.slice().sort((a,b)=>(new Date(a.date)- new Date(b.date)))
      setAvailArticles(sortedDates)
  } else if (sortDateOrder==='Ascending') {
      setSortDateOrder('')
      setAvailArticles(articles)
  }

}

useEffect(() => {
  if(sortVoteOrder) {
    setSortDateOrder('')
  }

  // console.log({sortVoteOrder,sortDateOrder})
}, [sortVoteOrder])


useEffect(() => {
  if(sortDateOrder) {
    setSortVoteOrder('')
  }

 
}, [sortDateOrder])





  return (
    <>
    {console.log({sortVoteOrder,sortDateOrder})}
    <button onClick={()=>sortVotes()}>
      {sortVoteOrder?
      (sortVoteOrder==='Descending'?'Sort Votes Ascending':'Turn Off Sort Votes'):
      'Sort Votes Descending'}</button>
    <button onClick={()=>sortDates()}>{sortDateOrder?
      (sortDateOrder==='Descending'?'Sort Dates Ascending':'Turn Off Sort Dates'):
      'Sort Dates Descending'}</button>

    <table className="articles">
      <thead>
        <tr>
          <th>Title</th>
          <th>Upvotes</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {availArticles.map((article)=> {
        return (
          <tr>
          <td>{article.title}</td>
          <td>{article.upvotes}</td>
          <td>{article.date}</td>
        </tr>
        )
      })}

      </tbody>
      

      
      

    </table>
    </>

  ) 
};



export default App
