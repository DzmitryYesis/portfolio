import React from 'react';
import style from './Projects.module.css'
import styleConteiner from '../../common/styles/Conteiner.module.css';
import Project from './project/Project';

const Projects = () => {
    return (
        <div className={style.projects}>
            <div className={`${styleConteiner.conteiner} ${style.projectsConteiner}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.project}>
                    <Project title={'Social network'}
                             discription={'dbadfbafdvnkaf kanvkajsdnv kafvkasdn akdsjvnasdkvn akfj nvaskdvn dfdfdfgdfgdfg dfgdfgdfg dfgdfgdfgdfgdfg dfgdfgdfg dfgfgdfgdfg dfgdfg'}/>
                    <Project title={'Todolist'}
                             discription={'sdfasdf sdf dsf   sdfa sdfasdfasdfasdf  a dsf ads fa sdf  asdf'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;