import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerFull, faTint } from '@fortawesome/free-solid-svg-icons';
import {Icon} from './Icon';
import "./IconWithValue.scss";


export const IconWithValue = ({ value, icon }: {value:string, icon:string}) => {

    return <p className='icon-elem'><FontAwesomeIcon icon={getIconFromIconName(icon)} size="lg" /> <span className='value-elem'>{value}</span></p>
    
}

const getIconFromIconName = (iconName:string) => {
    switch (iconName) {
        case Icon.humidity: return faTint;
        case Icon.thermometer: return faThermometerFull;
        default: return faTint;
    }
}