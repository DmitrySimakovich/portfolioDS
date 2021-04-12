import React, {FC, useState} from 'react';
import Slider, {CustomArrowProps, Settings} from 'react-slick';

import style from './slider.module.scss';

import urlImage from '../../assets/E8q5sx3tjV0.jpg';
import urlSocialNetwork from '../../assets/giphy.gif';
import urlImageFitness from '../../assets/image_fitnessHouse.png';
import urlImageTodoList from '../../assets/image_todoList.png';

import Button from '../Button/button';

type slideItemTypes = {
    index: number
    title: string
    description: string

    urlPreview?: string
    urlCode?: string
    urlImage: string
}

const NextArrow: FC<CustomArrowProps> = (props) => {

    const disable = (props.currentSlide && props.currentSlide + 1) === props.slideCount

    return (
        <>
            <button className={`${style.next_Arrow} ${disable ? style.next_Arrow__disabled : null}`}
                    onClick={props.onClick}
                    disabled={disable}/>
        </>
    )
}
const PrevArrow: FC<CustomArrowProps> = (props) => {

    const disable = props.currentSlide === 0

    return (
        <>
            <button className={`${style.prev_Arrow} ${disable ? style.prev_Arrow__disabled : null}`}
                    onClick={props.onClick}
                    disabled={disable}/>
        </>
    )
}

const SlideItem: FC<slideItemTypes> = ({title, description, index, urlPreview, urlImage, urlCode}) => {
    return (
        <div className={style.item}>
            <div className={style.row}>
                <figure className={style.image}>
                    <img src={urlImage} alt=""/>
                    <div className={style.image_info}>
                        {
                            urlPreview ?
                                <Button title={'Preview'} buttonType={'primary'} url={urlPreview}/>
                                :
                                <Button title={'Code'} buttonType={'primary'} url={urlCode}/>
                        }
                    </div>
                </figure>
                <div className={style.content}>
                    <h4>Name:</h4>
                    <p>{title}</p>

                    <h4>Description:</h4>
                    <p>{description}</p>

                    <div className={style.item_btnWrap}>
                        <Button title={'view code'} buttonType={'primary'} url={urlCode}/>
                        {
                            urlPreview ? <Button title={'view result'} buttonType={'secondary'} url={urlPreview}/>
                                :
                                null
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

const SliderContainer: FC = () => {

    const [active, setActive] = useState<number>(0)

    const settings: Settings = {
        dots: true,
        customPaging(index: number): JSX.Element {
            const isActive = index === active
            return (
                <div className={`${style.dots_item} ${isActive ? style.dots_item__active : undefined}`}>
                    <span>{index + 1}</span>
                </div>
            )
        },
        infinite: true,
        dotsClass: style.dots,
        speed: 300,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        className: style.container,
        beforeChange(oldIndex, newIndex) {
            setActive(newIndex)
        },
        autoplaySpeed: 2500
    };


    return (
        <>
            <Slider {...settings} >
                <SlideItem index={1} title={'Test assignment from FitnessHouse'}
                           description={'The project is a simplified version of the FitnessHouse website, which implements the functions of filtering products and adding them to the cart.'}
                           urlImage={urlImageFitness}
                           urlPreview={'https://dmitrysimakovich.github.io/fitness_house_market'}
                           urlCode={'https://github.com/DmitrySimakovich/fitness_house_market'}/>
                <SlideItem index={2} title={'Educational project "TodoList"'}
                           description={'This project presents the main CRUD - operations, authorization logic, as well as interaction with the server. This project used material-ui.'}
                           urlImage={urlImageTodoList}
                           urlPreview={'http://DmitrySimakovich.github.io/it-incubator-todolist-ts-16'}
                           urlCode={'https://github.com/DmitrySimakovich/it-incubator-todolist-ts-16/tree/master'}/>
                <SlideItem index={3} title={'Educational project "Social network"'}
                           description={'In this project, I have mastered the basic architectural concepts of building a SPA based on CRA. The project is currently under development, the existing code can be found by clicking the button.'}
                           urlImage={urlSocialNetwork}
                           urlCode={'https://github.com/DmitrySimakovich/social'}/>
            </Slider>
        </>
    )
}
export default SliderContainer