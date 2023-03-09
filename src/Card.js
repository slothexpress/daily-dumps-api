import React, { useState, useEffect } from 'react';

export default function Card() {
    const img = "https://www.tronalddump.io/img/tronalddump_850x850.png";
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
            <a target='_blank' href={quote._embedded.source[0].url}>
            <div className='card-quote'>
            <img src={img} className="Card-logo" alt="logo" />
           
                <p>
                {quote.value}
                </p>
        
            </div>
            </a>
        );
        } else if (quote && quote.value) {
        return (
            <div className='card-quote'>
                <img src={img} className="Card-logo" alt="logo" />
                <p>
                {quote.value}
                </p>
            </div>
            );
        } else {
        return null;
        }
          
          
}

