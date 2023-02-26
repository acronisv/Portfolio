import React from 'react';
import s from './Greeting.module.scss'
import avatar from './../../assets/images/avatar.png'


export const Greeting = () => {
    return (
        <div className={s.greeting}>
            <div className={s.greeting_wrap}>
                <div className={s.greeting_text}>
                    <span>Hi there!</span>
                    <p>My name is Roman Zhukhovtsov</p>
                    <p>Frontend developer</p>
                </div>
                <div className={s.greeting_photo}>
                    <img src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
    );
};
