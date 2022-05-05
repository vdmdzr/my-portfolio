import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";


const MyWorks = () => {

    const myWorks = [
        {
            id: 1,
            image: 'image...',
            title: 'TodoList',
            discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excepturi, illum incidunt nemo dolor sit amet, consectetur adipisicing elit  nemo dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 2,
            image: 'image...',
            title: 'Social Network',
            discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excep  nemo dolor sit amet, consectetur adipisicing elit'
        },
    ]

    return (
      <div className={style.myWorkBlock}>
          <div className={`${styleContainer.container} ${style.myWorkContainer}`}>
              <h2 className={style.title}>My works</h2>
              <div className={style.myWorks}>{myWorks.map(work => (
                <Work title={work.title} discr={work.discr} image={work.image}/>
              ))}</div>

          </div>
      </div>
    );
};

export default MyWorks;