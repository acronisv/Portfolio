import React from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
    name: string
    className?: string
}
export const Button = (props: ButtonPropsType) => {
    const clickHandler = (e: any) => {
        e.preventDefault()
    }

    let className = props.className ? props.className : s.button
    return (
        <a onClick={clickHandler} className={className} href="#">{props.name}</a>
    );
};
