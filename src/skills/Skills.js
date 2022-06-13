import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import css from "../assets/image/css.png"
import html from "../assets/image/html.png"
import js from "../assets/image/js.png"
import react from "../assets/image/react.png"
import redux from "../assets/image/redux.png"


const Skills = () => {

    const skills = [
        {
            id: 1,
            image: {backgroundImage: `url(${css})`},
            title: 'CSS',
            discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excepturi, illum incidunt nemo dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 2,
            image: {backgroundImage: `url(${html})`},
            title: 'HTML',
            discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excep'
        },
        {
            id: 3,
            image: {backgroundImage: `url(${js})`},
            title: 'JS',
            discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excepturi, illum incidunt nemo quae.'
        },
        {
            id: 4,
            image: {backgroundImage: `url(${react})`},
            title: 'React',
            discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excepturi, illum incidunt nemo quae.'
        },
        {
            id: 5,
            image: {backgroundImage: `url(${redux})`},
            title: 'Redux',
            discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excepturi, illum incidunt nemo quae.'
        },

    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'my skills'}/>
                <div className={style.skills}>
                    <Skill title={skills[0].title} discr={skills[0].discr} image={skills[0].image}/>
                    <Skill title={skills[1].title} discr={skills[1].discr} image={skills[1].image}/>
                    <Skill title={skills[2].title} discr={skills[2].discr} image={skills[2].image}/>
                    <Skill title={skills[3].title} discr={skills[3].discr} image={skills[3].image}/>
                    <Skill title={skills[4].title} discr={skills[4].discr} image={skills[4].image}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;