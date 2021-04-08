import React, {FC} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";

import style from './aboutMe.module.scss';

const AboutMe: FC = () => {

    return (
            <div className={`${style.section_aboutMe}`}>
                <div className={`${style.wrap_row}`}>
                    <div className={`${style.row_content}`}>
                        <div className={`${style.row_content__text}`}>
                            <h2>About Me</h2>
                            <p>Welcome to my portfolio site. My name is Dmitriy Simakovich and I am a front-end developer. On my site you can find examples of my projects, as well as my skills in using the React.JS library.</p>
                        </div>
                        <ul className={`${style.row_content__icons_box}`}>
                            <li>
                                <a href='https://vk.com/simych97' target="_blank">
                                    <FontAwesomeIcon icon={faVk} className={style.icon} size={"lg"}/>
                                </a>
                            </li>

                            <li>
                                <a href='https://instagram.com/dmitry.simakovich' target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} className={style.icon} size={"lg"}/>
                                </a>
                            </li>

                            <li>
                                <a href='mailto:dmitry.a.simakovich@gmail.com' target="_blank">
                                    <FontAwesomeIcon icon={faAt} className={style.icon} size={"lg"}/>
                                </a>
                            </li>

                            <li>
                                <a href='https://t.me/da_si_one' target="_blank">
                                    <FontAwesomeIcon icon={faTelegramPlane} className={style.icon} size={"lg"}/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={`${style.row_wrap_image}`}>
                        <div className={`${style.br}`}>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default AboutMe

/*
<div className={`${commonStyle.container__narrow} ${commonStyle.bgc_secondary} ${styleSection_aboutMe}`}>
<div className={style.content}>
    <h3>About Me</h3>
<p>Passionate designer & developer who loves simplicity in things and crafts beautiful user interfaces
with love.</p>
<div className={style.icons_list}>
<a href='https://vk.com/simych97' target="_blank">
<FontAwesomeIcon icon={faVk} className={style.icon} size={"lg"}/>
</a>

<a href='https://instagram.com/dmitry.simakovich' target="_blank">
<FontAwesomeIcon icon={faInstagram} className={style.icon} size={"lg"}/>
</a>

<a href='mailto:dmitry.a.simakovich@gmail.com' target="_blank">
<FontAwesomeIcon icon={faLinkedinIn} className={style.icon} size={"lg"}/>
</a>

<a href='https://t.me/da_si_one' target="_blank">
<FontAwesomeIcon icon={faTelegramPlane} className={style.icon} size={"lg"}/>
</a>
</div>
</div>
<div className={style.avatar__wrap}>
<img src="https://www.vladtime.ru/uploads/posts/2019-12/1577152831_maxresdefault.jpg" alt=""/>
</div>
</div>*/
