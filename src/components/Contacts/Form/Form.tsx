import React from 'react';
import s from './Form.module.scss'

export const Form = () => {
    return (
        <form action="" className={s.form}>
            <input className={s.form_name} type="text"/>
            <input className={s.form_phone} type="text"/>
            <textarea className={s.form_text} name="text-form" id="1"></textarea>
        </form>
    );
};
