//Libraries
import bemCssModules from 'bem-css-modules';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a } from "react-spring";
//Context
//Components
//Styles
import { default as MainStyles} from '../styles/Main.module.scss';
const style = bemCssModules(MainStyles);

const Main = () => {
  return ( 
    <>
      <div className={style('image-background')}>
        <h1>Nasza firma jest koks zobacz niżej</h1>
      </div>
    </>
   );
};
 
export default Main;