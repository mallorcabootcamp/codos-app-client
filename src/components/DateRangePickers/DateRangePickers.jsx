import React, { useState } from 'react';
import './DateRangePickers.scss';
import shortid from 'shortid';


export const DateRangePickers = ({ text }) => {

    const [date, setDate] = useState('');
    // const shortid = require('shortid');

    const idValue = shortid.generate()

    const handleChange = ({ target }) => {
        const { name, value } = target
        setDate( () => ({
          [name]: value
        }));
      };
    console.log(date);
    
    return (
        <>
            <label className='pt-5 range-pickers-text' for={idValue}>{text}:</label>
            <input className='range-pickers-input' onChange={handleChange} name={text} type="date" id={idValue} />
        </>
    )
}
