import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {

    const skills = [
        {
            id: 1,
            title: 'HTML/CSS',
            discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excepturi, illum incidunt nemo dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 2,
            title: 'JS/TS',
            discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excep'
        },
        {
            id: 3,
            title: 'React',
            discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excepturi, illum incidunt nemo quae.'
        },
    ]

    return (
      <div className={style.skillsBlock}>
          <div className={`${styleContainer.container} ${style.skillsContainer}`}>
              <h2 className={style.title}>Skills</h2>
              <div className={style.skills}>

                  {skills.map(skill => (
                    <Skill title={skill.title} discr={skill.discr}/>
                  ))}

              </div>
          </div>
      </div>
    );
};

export default Skills;