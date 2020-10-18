import React, { useState } from 'react';
import './DateRangePickers.scss';


export const DateRangePickers = ({ text }) => {

    const [date, setDate] = useState('');

    const handleChange = ({ target }) => {
        const { name, value } = target
        setDate( () => ({
          [name]: value
        }));
      };
    console.log(date);
    
    return (
        <>
            <label className='' for='date'>{text}:</label>
            <input onChange={handleChange} name={text} type="date" id='date' min="2020-01-01" max="2020-12-31" />
        </>
    )
}
