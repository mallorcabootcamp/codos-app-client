import React from 'react';
import { Link } from 'react-router-dom';
import { DateRangePickers } from '../../components/DateRangePickers/DateRangePickers';

const History = () => {
    return (
        <div className='container'>
            <div className='row'>
            <Link to='/'>main </Link>
            </div>
            <div className="row">
            <h1>Historico</h1>
            </div>
            <div className='row'>
                <div className="col">
                    <DateRangePickers text='Desde' />
                </div>
                <div className="col">
                    <DateRangePickers text='Hasta' />
                </div>
            </div>
        </div>
    );
}

export default History