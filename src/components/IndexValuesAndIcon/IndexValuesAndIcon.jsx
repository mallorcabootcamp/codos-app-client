import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./IndexValuesAndIcon.css";

export const IndexValuesAndIcon = ({ value, icon }) => {

    return (
        <div className='col'>
            <p className='h4'><FontAwesomeIcon icon={icon} size="lg" /> <span className='h5'>{value}</span></p>
        </div>
    )

}