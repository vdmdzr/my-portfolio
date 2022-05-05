import React from 'react';
import style from './Work.module.css'

export const Work = (props) => {
    return (
      <div className={style.work}>
          <div className={style.imageWork}>

              <form action="#" target="_blank">
                  <button type="submit">Click me</button>
              </form>

          </div>
          <h3 className={style.title}>{props.title}</h3>
          <div className={style.discription}>
              <span className={style.discriptionText}>{props.discr}</span>
          </div>
      </div>
    );
};

