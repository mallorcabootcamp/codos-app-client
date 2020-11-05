import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './LateralBar.scss';
import { ApiService } from '../../services/ApiService';

interface Props { onClick: any, onSelect: any }

export const LateralBar = ({ onClick, onSelect }: Props): JSX.Element => {
    const [device, setDevice] = useState(localStorage.getItem('localStorageKey') || '');
    const [deviceList, setDeviceList] = useState([]);

    const handleOnClick = (target: any) => {
        onSelect(target.value);
        setDevice(target.value);
        onClick()
    };

    const createLiElement = (value: string) => {
        return (
            <li>
                <button className={`border-0 my-2 ${device === value && 'menu-button-actived'} menu-button`} value={value} onClick={({ target }: any) => handleOnClick(target)}>
                    {value}
                </button>
            </li>)
    };



    useEffect((): any => {
        const cachedHits = localStorage.getItem(device);
        if (cachedHits) {
            setDevice(cachedHits);
          }
        localStorage.setItem('localStorageKey', device);
        ApiService.setDevice(device);
        ApiService.getUsersList().then((apiResponse: any) => {
            setDeviceList(apiResponse.map((value: string) => createLiElement(value)))
        });
    }, [device]);

    return (
        <div className="side-menu">
            <header className="top d-flex p-3 pl-4 justify-content-between align-items-center">
                <FontAwesomeIcon icon={faBars} size="lg" />
                <p className="m-0 font-weight-bold">NOMBRE DE LA APP</p>
                <div className="close-button border-0" onClick={onClick}>
                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                </div>
            </header>

            <main className="menu my-5 ml-5 d-flex flex-column ">
                <p className="font-weight-bold pb-4 h5">Listado de dispositivos</p>
                <ul className='list-unstyled'>
                    {deviceList}
                </ul>
            </main>

            <hr className="ml-5 text-left font-weight-bold" />

            <footer className="about mt-5 pl-5 font-weight-bold">
                <p>About</p>
            </footer>

        </div >
    )
}
