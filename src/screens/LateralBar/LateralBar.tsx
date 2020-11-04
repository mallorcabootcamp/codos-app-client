import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './LateralBar.scss';

interface Props { onClick: any }


export const LateralBar = ({ onClick }: Props): JSX.Element => {

    return (
        <aside className="side-menu">
            <header className="top d-flex p-3 pl-4 justify-content-between align-items-center">
                <FontAwesomeIcon icon={faBars} size="lg" />

                <p className="m-0 font-weight-bold">NOMBRE DE LA APP</p>

                <div className="close-button border-0" onClick={onClick}>
                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                </div>
            </header>

            <main className="menu mt-5 ml-4 d-flex flex-column ">
                <p className="font-weight-bold ml-1">Listado de dispositivos</p>
                <button className="menu-button border-0 my-2 font-weight-lighter">Dispositivo 1</button>
                <button className="menu-button border-0 my-2 font-weight-lighter">Dispositivo 2</button>
                <button className="menu-button border-0 my-2 font-weight-lighter mb-4">Dispositivo 3</button>
            </main>

            <hr className="ml-4 font-weight-bold" />

            <footer className="about mt-5 ml-4 font-weight-bold">
                <p>About</p>
            </footer>
        </aside >
    )
}
