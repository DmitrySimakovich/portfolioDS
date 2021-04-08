import React, {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Title from '../../Components/Title/title';

import {faHtml5, IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faCss3} from "@fortawesome/free-brands-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";

import style from './skills.module.scss';
import commonStyle from '../../Common/Styles/commonStyles.module.scss';

const Fade = require('react-reveal/Fade');

type ownProps = {
    icon: IconDefinition
    title: string
    description: string
    bgc_image: 'html' | 'css' | 'js' | 'react'
}

const ItemSkill: FC<ownProps> = ({icon, title, description, bgc_image}) => {

    let bgcImage;

    switch (bgc_image) {
        case "html":
            bgcImage = style.bg_img_html;
            break
        case "css":
            bgcImage = style.bg_img_css;
            break
        case "js":
            bgcImage = style.bg_img_js;
            break
        case "react":
            bgcImage = style.bg_img_react;
            break
    }

    return (
        <div className={`${style.item_content} ${bgcImage} ${style.flip}`}>
            <span className={`${style.flip_face}`}>{title.toUpperCase()}</span>
            <figcaption className={`${style.flip_face} ${style.back}`}>
                <div className={style.item_icon}>
                    <FontAwesomeIcon icon={icon} size={'3x'}/>
                </div>

                <div className={style.item_title}>
                    <h1>{title}</h1>
                </div>

                <div className={style.item_description}>
                    <p >{description}</p>
                </div>
            </figcaption>
        </div>
    )
}

const Skills: FC = () => {

    return (
        <>
            <Title title={'my skills'} subTitle={'what can i do'} titleType={'primary'}/>
            <div className={`${style.row}`}>
                <Fade left>
                    <figure className={`${style.item}`}>
                        <ItemSkill title={'Html'}
                            icon={faHtml5}
                            description={'The main blocks of building a web-document. Semantic layout.'}
                            bgc_image={'html'}/>
                    </figure>
                </Fade>

                <Fade left>
                    <figure className={`${style.item}`}>
                        <ItemSkill title={'Js / Ts'}
                                   icon={faJs}
                                   description={'Basic operations and data types, working with Dom elements, event loop, promise, Async / await, prototyping and basic principles of OOP. Recently I started using a typed version of the language - TypeScript.'}
                                   bgc_image={'js'}/>
                    </figure>
                </Fade>

                <Fade right>
                    <figure className={`${style.item}`}>
                        <ItemSkill title={'Css'}
                                   icon={faCss3}
                                   description={'When making up layouts, I used modern technologies, such as flex-box and grid, to arrange elements. Also I used the Sass preprocessor.'}
                                   bgc_image={'css'}/>
                    </figure>
                </Fade>

                <Fade right>
                    <figure className={`${style.item}`}>
                        <ItemSkill title={'React'}
                                   icon={faReact}
                                   description={'Using the React.js library to write applications. FLUX Cycle, HOC, REST API, react-redux, AJAX, axios. Understanding the component life cycle and asynchronous queries and operations.'}
                                   bgc_image={'react'}/>
                    </figure>
                </Fade>
            </div>
        </>
    )
}
export default Skills