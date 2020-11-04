import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './LateralMenuTransition.scss';

interface Props {
    children: any,
    in: any,
}



export const LateralMenuTransition = ({ children, in: inProps }: Props) => {
    return (
        <CSSTransition
            unmountOnExit
            in={inProps}
            timeout={300}
            classNames='lateral'
        >
            <div>
                <p>Hola mundo</p>
            </div>
        </CSSTransition>
    )
};
