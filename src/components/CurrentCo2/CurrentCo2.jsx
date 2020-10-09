import React, { useState, useEffect } from 'react';
import "./CurrentCo2.css";

export const CurrentCo2 = ({ eCoValue }) => {

    const [color, setColor] = useState('');
    useEffect(() => {
        const colorValue = getColor(eCoValue);
        setColor(colorValue)
    }, [eCoValue]);

    return (
        <div className='container p-5'>
            <h1 className="h3 text-left">Actual:</h1>
            <div className='text-center py-3 rounded shadow' style={{ backgroundColor: color }}>
                <p className='h5 p-0 m-0 text-white'>eCo²</p>
                <p className='h3 p-0 m-0 text-white'>{eCoValue} ppm</p>
            </div>
        </div>
    )
}

const getColor = (eCoValue) => {
    const hue = ((1 - eCoValue / 100) * 120);
    return `hsl(${hue},70%,60%)`;
}