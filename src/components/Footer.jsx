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
        <h3>Alarmsys Sławomir Cysewski</h3>
        <span>ul. Morska 99/17</span>
        <span>81-225 Gdynia</span>
        <span>Telefon: +48 501-386-935</span>
        <span><a href="mailto:alarmsys@alarmsys.pl">alarmsys@alarmsys.pl</a> </span>
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