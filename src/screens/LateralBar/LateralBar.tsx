import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './LateralBar.scss';

interface Props { onClick: any, onSelect: any }




export const LateralBar = ({ onClick, onSelect }: Props): JSX.Element => {
    const [device, setDevice] = useState('');

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
                <button className="menu-button border-0 my-2 p-0" value='pepe' onClick={onSelect}>Dispositivo 1</button>
                <button className="menu-button border-0 my-2 p-0" value='pili' onClick={onSelect}>Dispositivo 2</button>
                <button className="menu-button border-0 my-2 p-0" value='oscar' onClick={onSelect}>Dispositivo 3</button>
            </main>

            <hr className="ml-5 text-left font-weight-bold" />

            <footer className="about mt-5 pl-5 font-weight-bold">
                <p>About</p>
            </footer>

        </div >
    )
}
