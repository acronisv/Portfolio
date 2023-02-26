import React from 'react';
import s from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer_wrap}>
                <p>Roman Zhukhovtsov</p>
                <div className={s.footer_carousel}>
                    <div className={s.footer_img}></div>
                    <div className={s.footer_img}></div>
                    <div className={s.footer_img}></div>
                    <div className={s.footer_img}></div>
                </div>
                <p>© 2023 All rights reserved</p>
            </div>

        </footer>
    );
};
