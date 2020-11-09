import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './LateralMenuTransition.scss';

interface Props {
    children: JSX.Element,
    isVisible: boolean,
}

export const LateralMenuTransition = ({ children, isVisible }: Props) => {
    return (
        <>
            <CSSTransition
                in={isVisible}
                timeout={1000}
                classNames='lateral'
                unmountOnExit
            >
                {children}
            </CSSTransition>
        </>
    )
};
