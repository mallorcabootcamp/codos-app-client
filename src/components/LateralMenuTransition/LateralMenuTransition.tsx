import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './LateralMenuTransition.scss';

interface Props {
    children: any,
    isVisible: any,
}



export const LateralMenuTransition = ({ children, isVisible }: Props) => {
    return (
        <div>
            <CSSTransition
                in={isVisible}
                timeout={1000}
                classNames='lateral'
                unmountOnExit
            >

                {children}

            </CSSTransition>
        </div>
    )
};
