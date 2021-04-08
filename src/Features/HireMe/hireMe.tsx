import React, {FC} from 'react';

import style from './hireMe.module.scss';
import Title from '../../Components/Title/title';
import Button from '../../Components/Button/button';
import {Link} from "react-scroll";

const Fade = require('react-reveal/Fade');

const HireMe: FC = () => {

    return (
        <div className={`${style.hireMe}`}>
            <Fade bottom>
                <Title title={'LET\'S WORK TOGETHER!'} titleType={'primary'}/>
                <Link to={'contact'}
                      smooth={true}
                      duration={700}>
                    <Button title={'hire me!'} buttonType={'secondary'}/>
                </Link>
            </Fade>
        </div>
    )
}
export default HireMe