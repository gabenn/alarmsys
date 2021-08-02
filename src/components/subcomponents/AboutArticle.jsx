//Libraries
import bemCssModules from 'bem-css-modules';
import React, {useState} from 'react';
//Context
//Components
//Styles
import { default as OfferStyles} from '../../styles/AboutArticle.module.scss';
const style = bemCssModules(OfferStyles);

const AboutArticle = () => {

  return ( 
    <article className={style()}>
      article
    </article>
   );
}
 
export default AboutArticle;