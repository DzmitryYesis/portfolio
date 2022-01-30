import React from 'react';
import style from './Contacts.module.css'
import styleConteiner from '../../common/styles/Conteiner.module.css';

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleConteiner.conteiner} ${style.contactsConteiner}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input className={style.input} placeholder={'First Name/Last Name'}/>
                    <input className={style.input} placeholder={'Tel. number'}/>
                    <textarea className={style.textarea} placeholder={'Type you message'}/>
                </form>
                <button>Send</button>
            </div>

        </div>
    );
};

export default Contacts;