//Libraries
import bemCssModules from 'bem-css-modules';
import React from 'react';
import { Link } from 'react-router-dom';
//Context
//Components
//Styles
import { default as FooterStyles} from '../styles/Footer.module.scss';
const style = bemCssModules(FooterStyles);

const Footer = () => {
  return ( 
    <footer className={style()}>
      <address className={style('address')}>
        <h3>Lorem ADAM ADAM</h3>
        <span>ul. Warszawska 12</span>
        <span>23-213 Polska</span>
        <span>Telefon: +48 123-123-123</span>
        <span><a href="mailto:">lorem@lorem.com</a> </span>
      </address>
      <nav className={style('navigation-bar')}>
        <Link to='/'>STRONA GŁÓWNA</Link>
        <Link to='/about'>O FIRMIE</Link>
        <Link to='/offer'>OFERTA</Link>
        <Link to='/contact'>KONTAKT</Link>
      </nav>
    </footer>
   );
}
 
export default Footer;