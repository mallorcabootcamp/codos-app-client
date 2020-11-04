import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './LateralBar.scss';

interface Props { onClick: any}


export const LateralBar = ({onClick}: Props):JSX.Element => {

    return (
        <aside className="side-menu">
            <header className='row px-5'>
                {/* <i className="fas fa-bars"></i> */}
                <FontAwesomeIcon icon={faBars} size="lg" />
                <p>NOMBRE DE LA APP</p>

                <button className="close-button" onClick={onClick}>
                    <FontAwesomeIcon icon={faTimesCircle} size='lg' />
                </button>
            </header>

            <main className='row px-5'>
                <p>Listado de dispositivos</p>
                <button>Dispostivo 1</button>
                <button>Dispostivo 2</button>
                <button>Dispostivo 3</button>
            </main>

            <hr />

            <footer className='row px-5'>
                <a href="#">About</a>
            </footer>
        </aside>
    )
}
