//Libraries
import bemCssModules from 'bem-css-modules';
import React from 'react';
import {Link} from 'react-router-dom';
//Styles
import {default as AsideMenuStyles} from '../AsideMenu.module.scss';
const style = bemCssModules(AsideMenuStyles);

const AdminMenu = () => {
  return ( 
    <>
      <p className={style('title')}>Panel Administratora</p>
      <nav>
        <ul>
          <li className={style('link')}>
            <Link to='/manage-courses'>Zarządzanie</Link>
          </li>
        </ul>
      </nav>
    </>
   );
}
 
export default AdminMenu;