import React from 'react';
import s from './Skills.module.scss'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={s.skills_wrap}>
                <h2 className={s.skills_title}>My skills</h2>
                <div className={s.skills_container}>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis velit sed lacus dapibus eleifend sit amet eu tellus.'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}/>
                </div>
            </div>
        </div>
    );
};
