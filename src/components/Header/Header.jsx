//Libraries
import bemCssModules from 'bem-css-modules';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//Context
//Components
//Styles
import { default as HeaderStyles} from '../../styles/components/Header.module.scss';
const style = bemCssModules(HeaderStyles);

const Header = () => {
  //TO DO HAMBURGER
  return ( 
    <header className={style()}>
      <div>
        LOGO
        {/* IMG */}
      </div>
      <nav className={style('navigation-bar')}>
        <Link to='/'>STRONA GŁÓWNA</Link>
        <Link to='/about'>O FIRMIE</Link>
        <Link to='/offer'>OFERTA</Link>
        <Link to='/contact'>KONTAKT</Link>
      </nav>
    </header>
   );
}
 
export default Header;