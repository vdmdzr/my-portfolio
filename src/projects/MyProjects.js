import React from 'react';
import style from './MyProjects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from "../assets/image/todo.png"
import socialImage from "../assets/image/social.png"


const MyProjects = () => {

    const myWorks = [{
        id: 1,
        image: {backgroundImage: `url(${socialImage})`},
        title: 'Social Network',
        discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excepturi, illum incidunt nemo dolor sit amet, consectetur adipisicing elit  nemo dolor sit amet, consectetur adipisicing elit.'
    }, {
        id: 2,
        image: {backgroundImage: `url(${todoImage})`},
        title: 'Todo List',
        discr: 'ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus excep  nemo dolor sit amet, consectetur adipisicing elit'
    },]

    return (<div className={style.myWorkBlock}>
        <div className={`${styleContainer.container} ${style.myWorkContainer}`}>
            <Title text={"my projects"}/>
            <div className={style.myWorks}>
                {/*{myWorks.map(el => {*/}
                {/*    <Project key={el.id} style={el.image}*/}
                {/*             title={el.title} description={el.discr}/>*/}
                {/*})}*/}

                <Project image={myWorks[0].image}
                         title={myWorks[0].title}
                         description={myWorks[0].discr}/>
                <Project image={myWorks[1].image}
                         title={myWorks[1].title}
                         description={myWorks[1].discr}/>
            </div>
        </div>
    </div>);
};

export default MyProjects;