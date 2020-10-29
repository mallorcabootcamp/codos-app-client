import React from 'react'
import './Card.scss'

export const Card = ({children} :{children: JSX.Element | JSX.Element[], className?: string}) => {
    return (
        <div className='card-elem'>
            {children}
        </div>
    )
}

