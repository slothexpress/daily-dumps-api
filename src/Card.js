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

        // If data has been fetched properly (not null)
        if (quote && quote._embedded && quote._embedded.source) {
            return (
              <div className='card-quote'>
                <a target='_blank' href={quote._embedded.source[0].url}>
                  <p>
                  {quote.value}
                  </p>
                </a>
              </div>
            );
          } else if (quote && quote.value) {
            return (
                <div className='card-quote'>
                    <p>
                    {quote.value}
                    </p>
                </div>
              );
          } else {
            return null;
          }
          
          
}

