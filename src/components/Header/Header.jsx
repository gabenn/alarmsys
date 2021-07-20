//Libraries
import bemCssModules from 'bem-css-modules';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';
//Context
//Components
//Styles
import { default as HeaderStyles} from '../../styles/components/Header.module.scss';
const style = bemCssModules(HeaderStyles);

const Header = () => {
  return ( 
    <header className={style()}>
      <div>
        img
        {/* IMG */}
      </div>
      <nav>
        {/* 
          NAWIGACJA 
            Home
            About
            Offer
            Contact
        */}
        nav
      </nav>
    </header>
   );
}
 
export default Header;