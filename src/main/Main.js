import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
      <div className={style.mainBlock}>
          <div className={styleContainer.container}>
              <div className={style.greetings}>
                  <span className={style.hi}>Hi there!</span>
                  <h1>I`m Vadim Deruzhynski</h1>
                  <p className={style.shortDescription}>Front-end developer</p>
              </div>
              <div className={style.photo}>

              </div>
          </div>
      </div>
    );
};

export default Main;