import React from 'react'
import { Link, useParams } from 'react-router-dom';

type TRoute = { route: string }

const UnexpectedError = () => {

    const { route } : TRoute = useParams();

    return (
        <div>
            <p>Parece que algo no fue como esperabamos...</p>
            <button className='btn btn-dark'><Link to={`/${route}`} className='search-link'> Volver</Link> </button>
        </div>
    )
}
export default UnexpectedError;