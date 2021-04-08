import React, {FC} from 'react';
import Title from '../../Components/Title/title';

import style from './header.module.scss';
import commonStyle from '../../Common/Styles/commonStyles.module.scss';
import {Waypoint} from "react-waypoint";

type ownProps = {
    _callBackSetVisible: (newVisible: boolean) => void
    visible: boolean
}

const Header: FC<ownProps> = ({_callBackSetVisible, visible}) => {

    let styleHeader = `
        ${commonStyle.bgc_secondary} 
        ${style.section_header} 
        ${visible ? style.section_header__in : null}`

    return (
        <div className={styleHeader} >
            <span className={style.waypoint}>
                <Waypoint onEnter={() => {
                    _callBackSetVisible(true)
                }} onLeave={() => {
                    _callBackSetVisible(false)
                }}/>
            </span>
            <div className={style.wrapTitle}>
                <Title title={'Dmitry Simakovich'} subTitle={'hello, i am'} titleType={'hero'}/>
            </div>
        </div>
    )
}
export default Header