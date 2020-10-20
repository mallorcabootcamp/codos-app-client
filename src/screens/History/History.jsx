import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from '../../components/DatePicker/DatePicker';
import './History.scss'

const History = () => {
    // petición api 
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();

    return (
        <div className='container history-elem-container'>
            <div className='row'>
                <Link to='/' className='ml-4 mt-4 rounded-circle arrow-back-elem'><FontAwesomeIcon icon={faChevronLeft} size="lg" /></Link>
            </div>
            <div className='row'>
                <h1 className='text-center history-text-elem'>Histórico</h1>
            </div>
            <div className='row date-range-pickers-container'>
                <div className="col p-0">
                    <DatePicker date={fromDate} onDateChanged={(value) => setFromDate(value)} className='pt-3' text='Desde' />
                </div>
                <div className="col p-0">
                    <DatePicker date={toDate} onDateChanged={(value) => setToDate(value)} text='Hasta' />
                </div>
            </div>
        </div>
    );
}

export default History