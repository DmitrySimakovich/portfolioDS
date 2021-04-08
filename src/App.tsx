import React, {useState} from 'react';
import {Element, Link} from 'react-scroll';


import Header from './Features/Header/header';
import AboutMe from './Features/AboutMe/aboutMe';
import Skills from "./Features/Skills/skills";
import ProjectsList from "./Features/Projects/projectsList";
import HireMe from "./Features/HireMe/hireMe";
import ContactMe from "./Features/ContactMe/contactMe";


import commonStyle from './Common/Styles/commonStyles.module.scss';

import Footer from "./Features/Footer/footer";
import Navigation from "./Features/Navigation/navigation";

function App() {

    const [visible, setVisible] = useState<boolean>(true)
    return (
        <>
            <nav className={`${commonStyle.section__outer__short}                            
                             ${commonStyle.bgc_nav}
                             ${commonStyle.b_shad}           
                             ${visible ? commonStyle.out : commonStyle.in}`}>
                <div className={`${commonStyle.section__inner}`}>
                    <Navigation/>
                </div>
            </nav>

            <Element name={'home'}>
                <section className={`${commonStyle.section__outer} ${commonStyle.pad_none}`}>
                    <Header _callBackSetVisible={setVisible} visible={visible}/>
                </section>

                <section className={`${commonStyle.bgc_secondary} 
            ${commonStyle.pad_none} 
            ${commonStyle.w_sm} 
            ${visible ? commonStyle.out : commonStyle.in} `}>
                    <AboutMe/>
                </section>
            </Element>
            <Element name={'skills'}>
                <section className={`${commonStyle.section__outer}`}>
                    <div className={`${commonStyle.section__inner} ${commonStyle.section__inner_wide}`}>
                        <Skills/>
                    </div>
                </section>

                <section className={`${commonStyle.section__outer} ${commonStyle.pad_none}`}>
                    <div className={`${commonStyle.section__inner} ${commonStyle.bgc_att__w}`}>
                        <HireMe/>
                    </div>
                </section>
            </Element>
            <Element name={'works'}>
                <section className={`${commonStyle.section__outer} ${commonStyle.bgc_secondary}`}>
                    <div className={`${commonStyle.section__inner}`}>
                        <ProjectsList/>
                    </div>
                </section>
            </Element>
            <Element name={'contact'}>
                <section className={`${commonStyle.section__outer} `}>
                    <div className={`${commonStyle.section__inner}`}>
                        <ContactMe/>
                    </div>
                </section>
            </Element>
            <Footer/>
        </>
    )
}

export default App;