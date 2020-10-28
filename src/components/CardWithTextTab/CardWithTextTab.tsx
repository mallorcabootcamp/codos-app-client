import React from 'react';
import './CardWithTextTab.scss';

export const CardWithTextTab = ({ value ,children }: {value: string, children: JSX.Element} ):JSX.Element => {
    return (
        <div className='py-4'>
            <div className='card-tab inline d-inline-block px-3 py-1 text-center'>{value}</div>
            <div className='card-with-text-tab'>
                {children}
            </div>
        </div>
    )
}
