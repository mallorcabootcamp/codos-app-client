import React from 'react'
import { Link } from 'react-router-dom';
import { CreateUsersList } from '../../components/CreateUsersList/CreateUsersList';

export const SelectADevice = (props: any) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col px-5 py-4'>
                    <h2>Seleccione un dispositivo</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col px-5 py-4'>
                    <select className="prediction-input custom-select custom-select-lg">
                        <CreateUsersList/>
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col px-5 py-4'>
                    <Link to='/' ><button className='btn btn-secondary px-3' onClick={props.onClick}>Inicio</button></Link>
                </div>
            </div>
        </div>
    )
}


