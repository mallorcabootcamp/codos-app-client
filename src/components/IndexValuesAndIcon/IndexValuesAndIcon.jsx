import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./IndexValuesAndIcon.css";

export const IndexValuesAndIcon = ({ value, icon }) => {

    return (
        <div className='col text-center'>
            <p className='h4'><FontAwesomeIcon icon={icon} size="lg" /> <span className='h3'>{value}</span></p>
        </div>
    )

}