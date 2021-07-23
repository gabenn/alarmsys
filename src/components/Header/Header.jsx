//Libraries
import bemCssModules from 'bem-css-modules';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a } from "react-spring";
//Context
//Components
//Styles
import { default as HeaderStyles} from '../../styles/Header.module.scss';
const style = bemCssModules(HeaderStyles);

const Header = () => {

  //TODO
  //WYCIĄGNĄĆ NAWIGACJE DO NOWEGO KOMPONENTU (PROBLEM ZE STYLAMI)
  const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

  const [showMenu, displayMenu] = React.useState(false);
  const contentProps = useSpring({
    opacity: showMenu ? 1 : 0,
    marginLeft: showMenu ? 0 : -400,
    transition: 1
  });

  const navigationMenu = !isMobile 
    ? (
      <nav className={style('navigation-bar')}>
        <Link to='/'>STRONA GŁÓWNA</Link>
        <Link to='/about'>O FIRMIE</Link>
        <Link to='/offer'>OFERTA</Link>
        <Link to='/contact'>KONTAKT</Link>
      </nav>
    )
    : (
      showMenu 
      ?(
      <a.nav className={`${style('mobile-navigation-bar')} `} style={contentProps} >
        <h1>MENU</h1>
        <Link to='/' onClick={()=>displayMenu(false)}>STRONA GŁÓWNA</Link>
        <Link to='/about' onClick={()=>displayMenu(false)}>O FIRMIE</Link>
        <Link to='/offer' onClick={()=>displayMenu(false)}>OFERTA</Link>
        <Link to='/contact' onClick={()=>displayMenu(false)}>KONTAKT</Link>
        <button onClick={()=>displayMenu(false)}>ZAMKNIJ</button>
      </a.nav>
      )
      : <button className={style('mobile-show-button')} onClick={()=>displayMenu(true)}>
        
      </button>
    )

  //TO DO HAMBURGER
  return ( 
    <header className={style()}>
      <div>
        <img src='' alt="ALARMSYS" />
        {/* //https://media.discordapp.net/attachments/855918865435328553/867440586785161236/logo.jpg?width=306&height=122 */}
      </div>
      {navigationMenu}
    </header>
   );
   
}
 
export default Header;