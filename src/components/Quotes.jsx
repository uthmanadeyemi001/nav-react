import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Quotes.css'

const Quotes = () => {
  const [quotesArray, setQuotesArray] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://dummyjson.com/quotes')
      .then((res) => {
        setQuotesArray(res.data.quotes || [])
      })
      .catch((error) => {
        console.error('Failed to load quotes:', error)
        setQuotesArray([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


  return (
    <div className='container'>
      {quotesArray.map((quote) => (
      <div className='cont'>
   <div key={quote.id}>
          <h3>{quote.quote}</h3>
          <p>Author:{quote.author}</p> 
      </div>

        </div>
      ))}
    </div> )
  
}




export default Quotes
