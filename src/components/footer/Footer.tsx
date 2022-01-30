import React from 'react';
import style from './Footer.module.css'
import styleConteiner from '../../common/styles/Conteiner.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleConteiner.conteiner} ${style.footerConteiner}`}>
                <h2 className={style.title}>Dzmitry Yesis</h2>
                <div className={style.code}>What is it?</div>
                <h3 className={style.end}>All rights reserved</h3>
            </div>

        </div>
    );
};

export default Footer;