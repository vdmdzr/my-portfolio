import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Contacts = () => {
    return (
      <div className={style.contactsBlock}>
          <div className={`${styleContainer.container} ${style.contactsBlockContainer}`}>
              <h3 className={style.title}>Contacts</h3>
              <form className={style.formContacts}>
                  <input placeholder='name' type="text" name='name'/>
                  <input placeholder='email' type="text" name='@mail'/>
                  <textarea name='text' rows="3"></textarea>
              </form>
              <button className={style.send}>Send</button>


          </div>
      </div>
    );
};

export default Contacts;