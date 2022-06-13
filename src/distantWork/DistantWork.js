import React from 'react';
import style from './DistantWork.module.scss'
import styleContainer from "../common/styles/Container.module.css";

const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
                <h2 className={style.title}>I`m looking variants distant work</h2>
                <div>
                    <button className={style.hireMeBtn}>Hire me</button>
                </div>
            </div>
        </div>
    );
};

export default DistantWork;