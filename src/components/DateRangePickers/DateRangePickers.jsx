import React, { useState } from 'react';
import './DateRangePickers.scss';


export const DateRangePickers = ({ text }) => {

    const [date, getDate] = useState('');
    console.log(date);
    
    return (
        <>
            <label className='' for='date'>{text}:</label>
            <input onChange={(e) => getDate([text, e.target.value])} type="date" id='date' min="2020-01-01" max="2020-12-31" />
        </>
    )
}
