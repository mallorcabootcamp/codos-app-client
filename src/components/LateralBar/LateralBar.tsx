import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './LateralBar.scss';
import { Link } from 'react-router-dom';

interface Props {
    devices: string[],
    activeDevice: string,
    onClickOnClose: () => void,
    onClickOnDevice: (device: string) => void,
}

export const LateralBar = ({ onClickOnClose, onClickOnDevice, devices, activeDevice }: Props) => {

    return (
        <div className="side-menu dark">
            <div className="row top d-flex p-3 pl-4 justify-content-between align-items-center text-center">
                <p className="col ml-5 mt-4 font-weight-bold">CODOS APP</p>
                <div className="close-button border-0 mr-4" onClick={onClickOnClose}>
                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                </div>
            </div>

            <div className="row menu my-5 ml-5 d-flex flex-column ">
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

            <div className="row about ml-5 mt-5 font-weight-bold">
                <Link to='/about' className='about-link'>About</Link>
            </div>

        </div >
    )
}
