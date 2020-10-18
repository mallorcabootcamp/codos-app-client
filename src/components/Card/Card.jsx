import React from 'react'
import './Card.scss'

export const Card = ({children}) => {
    return (
        <div className='card-elem'>
            {children}
        </div>
    )
}

