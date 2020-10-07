import React, { useState, useEffect } from 'react';
import "./CurrentCo2.css";

const colorValues = {
    red: '#e30000',
    yellow: '#ffd300',
    green: '#00c500'
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
            setColor(colorValues.yellow);
        }else{
            setColor(colorValues.red);
        }
    }, [eCoValue]);

    return (
        <div className='container'>
            <div className='row m-5'>
                <div className='col'>
                    <h1 className="element__opacity h3 text-left">Actual:</h1>
                    <div className='row'>
                        <div className='element__opacity col text-center py-3 rounded shadow' style={{backgroundColor: color}}>
                            <p className='h4 p-0 m-0'>eCo²</p>
                            <p className='h3 p-0 m-0'>{eCoValue} ppm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}