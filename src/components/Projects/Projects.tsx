import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projects}>
            <div className={s.projects_wrap}>
                <h2>My projects</h2>
                <div className={s.projects_container}>
                    <Project title={'Project 1'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis velit sed lacus dapibus eleifend sit amet eu tellus.'}/>
                    <Project title={'Project 1'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis velit sed lacus dapibus eleifend sit amet eu tellus.'}/>
                </div>
            </div>
        </div>
    );
};
