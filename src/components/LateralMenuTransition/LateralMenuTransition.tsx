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
                timeout={300}
                classNames='lateral'
                unmountOnExit
            >
                <div>
                    <p>Hola</p>
                </div>
            </CSSTransition>
        </div>
    )
};
