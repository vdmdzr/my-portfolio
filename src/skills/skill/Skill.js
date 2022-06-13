import React from 'react';
import style from './Skill.module.scss'

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <div className={style.iconImage} style={props.image}/>
            </div>
            <h3>{props.title}</h3>
            <span className={style.discription}>{props.discr}</span>
        </div>
    );
};

export default Skill;