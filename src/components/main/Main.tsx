import React from 'react';
import style from './Main.module.css'
import styleConteiner from '../../common/styles/Conteiner.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleConteiner.conteiner}>
                <div className={style.helloMessage}>
                    <span>Hello!</span>
                    <h1>My name Dzmitry Yesis</h1>
                    <p>I am the best Front-End Develover what you ever see! It's true</p>
                </div>
                <div className={style.fotoCard}></div>
            </div>
        </div>
    );
};

export default Main;