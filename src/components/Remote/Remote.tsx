import React from 'react';
import s from './Remote.module.scss'
import {Button} from "../Button/Button";

export const Remote = () => {
    return (
        <div className={s.remote}>
            <div className={s.remote_wrap}>
                <h2>Рассматриваю вариант удаленной работы</h2>
                <Button name={'Hire me'}/>
            </div>
        </div>
    );
};
