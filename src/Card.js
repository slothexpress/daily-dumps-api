import React, { useState, useEffect } from 'react';



export default function Card() {
        const apiUrl = 'https://www.tronalddump.io/random/quote';
        const [quote, setQuote] = useState([]);
    
        useEffect(() => {
           fetch(apiUrl)
              .then((response) => response.json())
              .then((data) => {
                 console.log(data);
                 setQuote(data);
                 console.log(quote)
              })
              .catch((err) => {
                 console.log(err.message);
              });
        }, []);  

  return (
    <div className='quote'>
        <a href={quote._embedded.source[0].url}>
           {quote.value}
        </a>
    </div>
  )
}

