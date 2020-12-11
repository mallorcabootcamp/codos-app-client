import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import './Card.scss'

interface Props {
    className?: string
}

export const Card: FunctionComponent<Props> = ({ children, className }) => {
    const classes = classnames(`card-elem`, className);
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

