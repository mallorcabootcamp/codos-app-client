import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import {Icon} from './Icon';

import "./IconWithValue.css";

export const IconWithValue = ({ value, icon }) => {

    return (
        <div className='col text-center'>
            <p className='h4'><FontAwesomeIcon icon={getIconFromIconName(icon)} size="lg" /> <span className='h3'>{value}</span></p>
        </div>
    )

}

const getIconFromIconName = (iconName) => {
    switch (iconName) {
        case Icon.humidity: return faTint;
        case Icon.thermometer: return faThermometerHalf;
        default: return faTint;
    }
}