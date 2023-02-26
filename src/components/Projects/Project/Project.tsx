import React from 'react';
import s from './Project.module.scss'
import {Button} from "../../Button/Button";

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.project_image}>
                <Button name={'View'}/>
            </div>
            <div className={s.project_info}>
                <p className={s.project_title}>
                    {props.title}
                </p>
                <p className={s.project_description}>
                    {props.description}
                </p>
            </div>
        </div>
    );
};
