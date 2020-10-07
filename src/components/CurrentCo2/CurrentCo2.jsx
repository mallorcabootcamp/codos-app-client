import React from 'react';
import "./CurrentCo2.css";

export const CurrentCo2 = ({eCoValue}) => {
    return (
        <div className='container'>
            <div className='row m-5'>
                <div className='col'>
                    <h1 className="h3 text-left">Actual:</h1>
                    <div className='row'>
                        <div className='col text-center bg-success py-3 rounded'>
                            <p className='h4 p-0 m-0'>eCo²</p>
                            <p className='h3 p-0 m-0'>{eCoValue} ppm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}