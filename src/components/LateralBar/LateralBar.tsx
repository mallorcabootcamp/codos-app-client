import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './LateralBar.scss';

interface Props {
    devices: string[],
    activeDevice: string,
    onClickOnClose: () => void,
    onClickOnDevice: (device: string) => void,
}

export const LateralBar = ({ onClickOnClose, onClickOnDevice, devices, activeDevice }: Props): JSX.Element => {

    /*useEffect((): any => {
        const cachedHits = localStorage.getItem(device);
        if (cachedHits) {
            setDevice(cachedHits);
        }
        localStorage.setItem('localStorageKey', device);
        ApiService.setDevice(device);
        ApiService.getUsersList().then((apiResponse: any) => {
            setDeviceList(apiResponse.map((value: string) => createLiElement(value)))
        });
    }, [device]);*/

    return (
        <div className="side-menu">
            <header className="top d-flex p-3 pl-4 justify-content-between align-items-center">
                <FontAwesomeIcon icon={faBars} size="lg" />
                <p className="m-0 font-weight-bold">NOMBRE DE LA APP</p>
                <div className="close-button border-0" onClick={onClickOnClose}>
                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                </div>
            </header>

            <main className="menu my-5 ml-5 d-flex flex-column ">
                <p className="font-weight-bold pb-4 h5">Listado de dispositivos</p>
                <ul className='list-unstyled'>
                    {devices.map(device => (
                        <li>
                            <button
                                className={`border-0 my-2 ${device === activeDevice && 'menu-button-actived'} menu-button`}
                                onClick={() => onClickOnDevice(device)}>
                                {device}
                            </button>
                        </li>
                    ))}
                </ul>
            </main>

            <hr className="ml-5 text-left font-weight-bold" />

            <footer className="about mt-5 pl-5 font-weight-bold">
                <p>About</p>
            </footer>

        </div >
    )
}
