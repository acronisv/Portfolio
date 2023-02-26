import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.skill_icon}>icon</div>
            <h3>{props.title}</h3>
            <p className={s.skill_description}>
                {props.description}
            </p>
        </div>
    );
};
