import React, {FC} from 'react';

import style from './title.module.scss';

type ownProps = {
    title: string
    subTitle?: string
    titleType: 'primary' | 'secondary' | 'hero'
}

const Title: FC<ownProps> = ({title, subTitle, titleType}) => {

    let styleTitle;

    switch (titleType) {
        case "hero":
            styleTitle = style.title__hero;
            break
        case "primary":
            styleTitle = style.title__primary;
            break
        case "secondary":
            styleTitle = style.title__secondary;
            break
        default:
            styleTitle = style.title;
    }

    return (
        <div className={`${style.title} ${styleTitle}`}>


            {
                subTitle ? <h2>{subTitle}</h2> : null
            }
            <h1>{title}</h1>
        </div>
    )
}
export default Title