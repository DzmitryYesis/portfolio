import React from 'react';
import style from './Project.module.css'

type ProjectType = {
    title: string
    discription: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>Image</div>
            <h3>{props.title}</h3>
            <span>{props.discription}</span>
        </div>
    );
};

export default Project;