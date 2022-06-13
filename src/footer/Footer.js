import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'


const Footer = () => {
    return (
      <div className={style.footerBlock}>
          <div className={`${styleContainer.container} ${style.footerBlockContainer}`}>
              <h3 className={style.title}>Vadim Deruzhynski</h3>
              <div className={style.friends}>
                  <div className={style.icon}></div>
                  <div className={style.icon}></div>
                  <div className={style.icon}></div>
                  <div className={style.icon}></div>
              </div>
              <h4 className={style.allReserved}>© 2022 All rights reserved</h4>
          </div>
      </div>
    );
};

export default Footer;