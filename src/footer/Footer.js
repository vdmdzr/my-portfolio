import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'


const Footer = () => {
    return (
      <div className={style.footerBlock}>
          <div className={`${styleContainer.container} ${style.footerBlockContainer}`}>
              <h3 className={style.title}>Деружинский Вадим Алексеевич</h3>
              <div className={style.friends}>
                  <div className={style.icon}></div>
                  <div className={style.icon}></div>
                  <div className={style.icon}></div>
                  <div className={style.icon}></div>
              </div>
              <h4>© 2022 Все права защищены - All rights reserved</h4>
          </div>
      </div>
    );
};

export default Footer;