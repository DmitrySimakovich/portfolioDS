import React, {FC} from 'react';

import style from './button.module.scss';

type ownProps = {
    title: string
    buttonType: 'primary' | 'secondary' | 'disable'
    url?: string
}

const Button: FC<ownProps> = ({title, buttonType, url}) => {

    let styleButton;

    switch (buttonType) {
        case "primary":
            styleButton = `${style.btn} ${style.btn__primary}`
            break
        case "secondary":
            styleButton = `${style.btn} ${style.btn__secondary}`
            break
        case "disable":
            styleButton = `${style.btn} ${style.btn__disable}`
            break
    }

    return (
        <a href={url} target='_blank'>
            <button disabled={buttonType==='disable'} className={styleButton}>{title}</button>
        </a>
    )
}
export default Button