import React, { useMemo } from 'react';
import "./CurrentCo2.scss";

const maximumColorRange = 145;
const maximumECoValue = 1000;
const redColorValue = 0;

interface Props { eCoValue: any }

export const CurrentCo2 = ({ eCoValue }: Props): JSX.Element => {

    const backgroundColor = useMemo(() => {
        return getBackgroundColor(eCoValue);
    }, [eCoValue]);

    const borderColor = useMemo(() => {
        return getBorderColor(eCoValue);
    }, [eCoValue]);

    return (
        <div className='container pt-0 pb-4 mb-2 current-co2-elem'>
            <div className='text-center m-auto py-3 rounded-circle outer-circle' style={{ backgroundColor: borderColor }}>
                <div className='text-center m-auto py-3 shadow rounded-circle inner-circle' style={{ backgroundColor }}>
                    <p className='h5 p-0 m-0 text-white pt-5 mt-2 eco-elem'>eCO²</p>
                    <p className='h3 p-0 m-0 text-white mt-1'><span>{eCoValue}</span> ppm</p>
                </div>
            </div>
        </div>
    )
}

const getBackgroundColor = (eCoValue: number) => {
    const hue = ((1 - eCoValue / maximumECoValue) * maximumColorRange);
    return `hsl(${eCoValue <= maximumECoValue ? hue : redColorValue},63%,49%)`;
}

const getBorderColor = (eCoValue: number) => {
    const hue = ((1 - eCoValue / maximumECoValue) * maximumColorRange);
    return `hsl(${eCoValue <= maximumECoValue ? hue : redColorValue},62%,59%)`;
}