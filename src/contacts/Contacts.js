import React from 'react';
import {Title} from "../common/components/title/Title";
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsBlockContainer}`}>
                <Title text={"contacts"}/>
                <form className={style.formContacts}>
                    <input id={'inputName'} placeholder='your name' type="text" name='name'/>
                    <input id={'inputNumber'} placeholder='your number' type="text" name='number'/>
                    <input id={'inputemail'} placeholder='your email' type="text" name='@mail'/>
                    <textarea name='text' rows="5"></textarea>
                </form>
                <button type={"send"} className={style.sendBtn}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;
