//Libraries
import bemCssModules from 'bem-css-modules';
import React from 'react';
import {Link} from 'react-router-dom';
//Styles
import {default as AsideMenuStyles} from '../AsideMenu.module.scss';
const style = bemCssModules(AsideMenuStyles);

const UserMenu = ({isUserLogged}) => {
  return ( 
    <>
      <p className={style('title')}>Panel użytkownika</p>
      <nav>
        <ul>
          <li className={style('link')}>
            <Link to='/'>W sprzedaży</Link>
          </li>
          {isUserLogged && <li className={style('link')}><Link to='/my-courses'>Zakupione</Link></li>}
        </ul>
      </nav>
    </>
   );
}
 
export default UserMenu;