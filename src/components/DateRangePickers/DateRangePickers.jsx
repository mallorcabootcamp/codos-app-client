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
            <label className='pt-5 range-pickers-text-elem' for='date'>{text}:</label>
            <input className='range-pickers-input-elem' onChange={handleChange} name={text} type="date" id='date' />
        </>
    )
}
