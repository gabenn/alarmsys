//Libraries
import bemCssModules from 'bem-css-modules';
import React, {useState} from 'react';
//Context
//Components
//Styles
import { default as OfferStyles} from '../../styles/AboutNavigation.module.scss';
const style = bemCssModules(OfferStyles);

const AboutNavigation = (props) => {
  
  const { handleClick, pages } = props;
  const buttons = pages.map(btn=><button key={btn.id} data-value={btn.id-1} onClick={handleClick} >{btn.id}</button>)

  return ( 
    <nav className={style()}>
     {buttons}
    </nav>
   );
}
 
export default AboutNavigation;