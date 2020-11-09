import React from 'react';
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

    return (
        <div className="side-menu">
            <div className="top d-flex p-3 pl-4 justify-content-between align-items-center">
                <FontAwesomeIcon icon={faBars} size="lg" />
                <p className="m-0 font-weight-bold">NOMBRE DE LA APP</p>
                <div className="close-button border-0" onClick={onClickOnClose}>
                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                </div>
            </div>

            <div className="menu my-5 ml-5 d-flex flex-column ">
                <p className="font-weight-bold pb-4 h5">Listado de dispositivos</p>
                <ul className='list-unstyled'>
                    {devices.map(device => (
                        <li key={device} 
                                className={`border-0 my-2 px-0 ${device === activeDevice && 'menu-button-actived'} menu-button`}
                                onClick={() => onClickOnDevice(device)}>
                                {device}
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="ml-5 text-left font-weight-bold" />

            <div className="about mt-5 pl-5 font-weight-bold">
                <p>About</p>
            </div>

        </div >
    )
}
