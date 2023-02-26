import React from 'react';
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return (
        <header className={s.header}>
            <Nav/>
        </header>
    );
};
