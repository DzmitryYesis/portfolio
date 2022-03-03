import React from 'react';
import style from './Skills.module.css'
import styleConteiner from '../../common/styles/Conteiner.module.css';
import Skill from './skill/Skill';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleConteiner.conteiner} ${style.skillsConteiner}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JavaScript'} discription={'Some discription'}/>
                    <Skill title={'TypeScript'} discription={'Some discription'}/>
                    <Skill title={'React'} discription={'Some discription'}/>
                    <Skill title={'Redux'} discription={'Some discription'}/>

                </div>
            </div>
        </div>
    );
};

export default Skills;