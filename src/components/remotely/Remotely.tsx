import React from 'react';
import style from './Remotely.module.css'
import styleConteiner from '../../common/styles/Conteiner.module.css';

const Remotely = () => {
    return (
        <div className={style.remotely}>
            <div className={`${styleConteiner.conteiner} ${style.remotelyConteiner}`}>
                <h2 className={style.title}>Looking into remote work options</h2>
                <button>Hire me!</button>
            </div>
        </div>
    );
};

export default Remotely;