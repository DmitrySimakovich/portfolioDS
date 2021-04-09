import React, {FC} from 'react';
// import Fade from 'react-awesome-reveal';

import Title from '../../Components/Title/title';
import ContactForm from "./contactForm";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarked, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

import style from './contactMe.module.scss';

const Fade = require('react-reveal/Fade');

const _render_GetInTouch_items = () => {
    return (
        <>
            <div className={style.row__item}>
                <div className={style.row__item_content__box}>
                    <FontAwesomeIcon icon={faMapMarked} size={'2x'} className={style.icon_mb}/>
                    <div className={style.item_content}>
                        <a target='_blank'
                           href="https://www.google.ru/maps/place/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3/@59.940461,29.8145015,10z/data=!3m1!4b1!4m5!3m4!1s0x4696378cc74a65ed:0x6dc7673fab848eff!8m2!3d59.9310584!4d30.3609096?hl=ru">Pr-t.
                            Stroitelej, Sankt-Peterburg</a>
                        <p>Address</p>
                    </div>
                </div>
            </div>

            <div className={style.row__item}>
                <div className={style.row__item_content__box}>
                    <FontAwesomeIcon icon={faMobileAlt} size={'2x'} className={style.icon_mb}/>
                    <div className={style.item_content}>
                        <a href="tel:+79119968902">8-911-996-89-02</a>
                        <p>Call me</p>
                    </div>
                </div>
            </div>

            <div className={style.row__item}>
                <div className={style.row__item_content__box}>
                    <FontAwesomeIcon icon={faEnvelope} size={'2x'} className={style.icon_mb}/>
                    <div className={style.item_content}>
                        <a href="mailto:dmitry.a.simakovich@gmail.com">dmitry.a.simakovich@gmail.com</a>
                        <p>Email me</p>
                    </div>
                </div>
            </div>
        </>
    )
}


const ContactMe: FC = () => {

    return <>
        <Title title={'contact'} subTitle={'say hello'} titleType={"primary"}/>
        <Fade left>
            <div className={style.contact_details}>
                <h6>Get in Touch</h6>
                <div className={style.row}>
                    {_render_GetInTouch_items()}
                </div>
            </div>
        </Fade>

        <Fade right><ContactForm/></Fade>
    </>
}
export default ContactMe