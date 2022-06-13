import React from 'react';
import style from './Project.module.scss'

export const Project = (props) => {

    return (
        <div className={style.work}>
            <div style={props.image} className={style.imageWork}>
                <a href="http://localhost:3000/my-portfolio"
                   className={style.viewButton}>
                    Watch
                </a>
            </div>
            <div className={style.discription}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.discriptionText}>{props.description}</span>
            </div>
        </div>
    );
};

