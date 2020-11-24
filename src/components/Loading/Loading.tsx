import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loading.scss';

interface props {
    color: string;
}

export const Loading = ({color}: props) => {
    return (
        <div className={`text-center loading py-5 ${color}`}>
            <FontAwesomeIcon icon={faSpinner} size="lg" />
        </div>
    )
}
