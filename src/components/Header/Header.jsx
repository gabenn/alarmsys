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

  //TODO
  //WYCIĄGNĄĆ NAWIGACJE DO NOWEGO KOMPONENTU (PROBLEM ZE STYLAMI)
  //ANIMACJA MENU MOBILE (MOŻE SAM CSS?)
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

  const handleCloseMenu = ()=>setShowMenu(false)
  const handleOpenMenu = ()=>setShowMenu(true)

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
      <nav className={`${style('mobile-navigation-bar')} `}>
        <h1>MENU</h1>
        <Link to='/' onClick={handleCloseMenu}>STRONA GŁÓWNA</Link>
        <Link to='/about' onClick={handleCloseMenu}>O FIRMIE</Link>
        <Link to='/offer' onClick={handleCloseMenu}>OFERTA</Link>
        <Link to='/contact' onClick={handleCloseMenu}>KONTAKT</Link>
        <button onClick={handleCloseMenu}>ZAMKNIJ</button>
      </nav>
      )
      : <button className={style('mobile-show-button')} onClick={handleOpenMenu}>Pokaż menu</button>
    )

    
  //TO DO HAMBURGER
  return ( 
    <header className={style()}>
      <div>
        LOGO
        {/* IMG */}
      </div>
      {navigationMenu}
    </header>
   );
   
}
 
export default Header;