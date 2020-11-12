import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <p>Parece que algo no fue como esperabamos...</p>
            <button className='btn btn-dark'><Link to='/' className='search-link'> Reintentar </Link> </button>
        </div>
    )
}
export default NotFound;