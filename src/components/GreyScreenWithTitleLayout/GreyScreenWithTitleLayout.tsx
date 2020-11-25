import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import './GreyScreenWithTitleLayout.scss'

interface Props {
    title: string,
    children: JSX.Element;
}


export const GreyScreenWithTitleLayout = ({title, children}: Props) => {
    return (
        <div className='grey-layout__container container'>
            <div className='row'>
                <Link to='/' className='ml-4 mt-4 rounded-circle grey-layout__arrow-back-elem'><FontAwesomeIcon icon={faChevronLeft} size="lg" /></Link>
            </div>
            <div className='row'>
                <h1 className='text-center grey-layout__text-elem'>{title}</h1>
            </div>
            {children}
        </div>
    )
}
