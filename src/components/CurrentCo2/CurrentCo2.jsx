import React, { useState, useEffect } from 'react';
import "./CurrentCo2.scss";

const maximumColorRange = 145;
const maximumECoValue = 100; 

export const CurrentCo2 = ({ eCoValue }) => {

    const [color, setColor] = useState('');
    const [borderColor, setBorderColor] = useState('');

    useEffect(() => {
        const colorValue = getBackgroundColor(eCoValue);
        setColor(colorValue)
    }, [eCoValue]);

    useEffect(() => {
        const colorValue = getBorderColor(eCoValue);
        setBorderColor(colorValue)
    }, [eCoValue]);

    return (
        <div className='container p-5 currentCo2Elem'>
            <div className='text-center m-auto py-3 shadow rounded-circle' style={{ backgroundColor: color, borderColor: borderColor }}>
                <p className='h5 p-0 m-0 text-white pt-5 mt-2 eco-elem'>eCO²</p>
                <p className='h3 p-0 m-0 text-white mt-1'><span>{eCoValue}</span> ppm</p>
            </div>
        </div>
    )
}

const getBackgroundColor = (eCoValue) => {
    const hue = ((1 - eCoValue / maximumECoValue) * maximumColorRange);
    return `hsl(${hue},63%,49%)`;
}

const getBorderColor = (eCoValue) => {
    const hue = ((1 - eCoValue / maximumECoValue) * maximumColorRange);
    return `hsl(${hue},62%,59%)`;
}