import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import robotImg from '../../img/unexpected-error.png';
import { parse } from 'query-string';
import './UnexpectedError.scss';

const UnexpectedError = () => {

    const location = useLocation();

    const { redirectTo } = parse(location.search);

    return (
        <div className='container pt-5'>
            <div className='unexpected-error'>
                <div className='row'>
                    <div className='col'>
                        <div className='m-auto unexpected-error__text'>
                            <p className='font-weight-bold h5 py-3'>¡Vaya!</p>
                            <p className='unexpected-error__down-text'>Algo no fue como esperábamos</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col px-5 unexpected-error__robot-img'>
                        <img src={robotImg} alt="robot" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-center m-5'>
                        <button className='btn mt-3 py-2 px-5 font-weight-bold unexpected-error__button'><Link to={redirectTo as string || '/'} className='search-link'>Volver</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UnexpectedError;