import {Sling as Hamburger} from 'hamburger-react';
import React, {FC, useState} from 'react';
import {Link} from 'react-scroll';

import style from './navigation.module.scss'

const Navigation: FC = () => {

    const [isOpen, setOpen] = useState<boolean>(false)

    if (isOpen) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }

    const getLinks = (links: Array<string>, handlerSetIsOpen?: () => void) => {

        return (
            <>
                {
                    links.map(link => (
                        <Link to={link}
                              activeClass={style.active}
                              className={style.nav_list__item}
                              spy={true}
                              smooth={true}
                              duration={700}
                              onClick={handlerSetIsOpen}>
                            {link.toUpperCase()}</Link>
                    ))
                }
            </>
        )
    }

    return (
        <div className={style.nav_container}>
            <Link to={'home'}
                  className={style.nav_logo}
                  smooth={true}
                  duration={700}
                  onClick={() => setOpen(false)}>
                Dmitry
            </Link>

            <div className={style.nav_list}>
                {getLinks(['home', 'skills', 'works', 'contact'])}
            </div>

            <div className={style.sidebar}>
                <Hamburger toggled={isOpen} toggle={setOpen} color='#5ac24e'/>
            </div>

            <div className={`${style.sidebar_box} ${isOpen ? style.sidebar_box_open : null}`}>
                <div className={style.sidebar_box__list}>
                    {getLinks(['home', 'skills', 'works', 'contact'], () => setOpen(false))}
                </div>
            </div>


        </div>
    )
}
export default Navigation