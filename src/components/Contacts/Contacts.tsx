import React from 'react';
import s from './Contacts.module.scss'
import {Form} from "./Form/Form";
import {Button} from "../Button/Button";

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.contacts_wrap}>
                <h2 className={s.contacts_title}>Контакты</h2>
                <Form/>
                <Button name={'Send'}/>
            </div>
        </div>
    );
};
