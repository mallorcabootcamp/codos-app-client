import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loading.scss';

interface Props {
    color: string;
}

export const Loading = ({color}: Props) => {
    return (
        <div className={`text-center loading py-5 ${color}`}>
            <FontAwesomeIcon icon={faSpinner} size="lg" />
        </div>
    )
}
