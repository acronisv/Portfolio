import React from 'react';
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.menu_wrap}>
                <li className={s.menu_item}>Main</li>
                <li className={s.menu_item}>Skills</li>
                <li className={s.menu_item}>Projects</li>
                <li className={s.menu_item}>Contacts</li>
            </ul>
        </nav>
    );
};
