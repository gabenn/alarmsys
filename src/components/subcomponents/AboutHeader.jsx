//Libraries
import bemCssModules from 'bem-css-modules';
import React, {useState} from 'react';
//Context
//Components
import AboutArticle from './AboutArticle';
//Styles
import { default as AboutHeaderStyles} from '../../styles/AboutHeader.module.scss';
const style = bemCssModules(AboutHeaderStyles);
const AboutHeader = () => {

  const [e,setE]= useState('')

  return ( 
    <AboutArticle />
   );
}
 
export default AboutHeader;