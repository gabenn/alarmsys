//Libraries
import bemCssModules from 'bem-css-modules';
import React, {useState} from 'react';
//Context
//Components
import AboutHeader from './subcomponents/AboutHeader';
//Styles
import { default as OfferStyles} from '../styles/About.module.scss';
const style = bemCssModules(OfferStyles);

const About = () => {

  return (
    <>
    <AboutHeader />
    </>
   );
}
 
export default About;