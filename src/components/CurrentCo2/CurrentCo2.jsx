import React, { useMemo } from 'react';
import "./CurrentCo2.scss";

const maximumColorRange = 145;
const maximumECoValue = 100; 

export const CurrentCo2 = ({ eCoValue }) => {

    const backgroundColor = useMemo(() => {
        return getBackgroundColor(eCoValue);
    }, [eCoValue]);

    const borderColor = useMemo(() => {
        return getBorderColor(eCoValue);
    }, [eCoValue]);

    return (
        <div className='container p-5 current-co2-elem'>
            <div className='text-center m-auto py-3 shadow rounded-circle' style={{ backgroundColor, borderColor }}>
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