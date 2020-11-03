import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ApiService } from '../../services/ApiService';
import './SelectADevice.scss';

export const SelectADevice = (props: any) => {
    // reparar undefined 
    const [usersList, setUsersList] = useState<JSX.Element[]>();

    useEffect(() => {
        ApiService.getUsersList().then((response) => {
            setUsersList(response.map((user) => <option value={user}>{user}</option>));
        })}
    , []);


    return (
        <div className='container select-a-device'>
            <div className='row'>
                <div className='col px-5 py-3 pt-5'>
                    <h2>Seleccione un dispositivo</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col px-5 py-4'>
                    <select name='users' className="prediction-input custom-select custom-select-lg" onClick={() => props.onClick()} onChange={({target}) => ApiService.setUser(target.value)}>
                        <option style={{display: 'none'}}></option>
                        {usersList}
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col px-5 py-4'>
                    <Link to='/' ><button className='btn btn-secondary px-3 select-a-device-btn'>Inicio</button></Link>
                </div>
            </div>
        </div>
    )
}


