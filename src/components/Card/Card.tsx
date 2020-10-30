import React from 'react';
import classnames from 'classnames';
import './Card.scss'

interface Props {
    children: JSX.Element | JSX.Element[],
    className?: string
}

export const Card = ({ children, className }: Props) => {
    const classes = classnames(`card-elem`, className);
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

