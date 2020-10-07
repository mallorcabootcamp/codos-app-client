import React, { useState, useEffect } from 'react';
import "./CurrentCo2.css";

const colorValues = {
    red: '#e74c3c',
    orange: '#f39c12',
    green: '#2ecc71'
}

const dangerValues = {
    noDanger: 15,
    mediumDanger: 50,
}

export const CurrentCo2 = ({eCoValue}) => {

    const [color, setColor] = useState(colorValues.green);

    useEffect(() => {
        if (eCoValue < dangerValues.noDanger) {
            setColor(colorValues.green);
        }else if (eCoValue < dangerValues.mediumDanger) {
            setColor(colorValues.orange);
        }else{
            setColor(colorValues.red);
        }
    }, [eCoValue]);

    return (
        <div className='container'>
            <div className='row m-5'>
                <div className='col'>
                    <h1 className="h3 text-left">Actual:</h1>
                    <div className='row'>
                        <div className='col text-center py-3 rounded shadow' style={{backgroundColor: color}}>
                            <p className='h4 p-0 m-0 text-white'>eCo²</p>
                            <p className='h3 p-0 m-0 text-white'>{eCoValue} ppm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}