import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from '../../components/DatePickers/DatePicker';
import './History.scss'

const History = () => {
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
                  <DatePicker className='pt-3' text='Desde' />
                </div>
                <div className="col p-0">
                    <DatePicker text='Hasta' />
                </div>
            </div>
        </div>
    );
}

export default History