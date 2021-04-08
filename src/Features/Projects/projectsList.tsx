import React, {FC} from 'react';

import Title from '../../Components/Title/title';
import SliderContainer from '../../Components/SliderContainer/sliderContainer';

const Fade = require('react-reveal/Fade');

const ProjectsList: FC = () => {


    return (
        <>
            <Title title={'my works'} subTitle={'portfolio'} titleType={'primary'}/>

            <Fade>
                <SliderContainer/>
            </Fade>
        </>
    )
}
export default ProjectsList