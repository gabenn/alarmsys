//Libraries
import bemCssModules from 'bem-css-modules';
import React, { useContext, useEffect, useState } from 'react';
//Components
import AdminMenu from './subcomponents/AdminMenu';
import { StoreContext } from '../../store/StoreProvider';
import UserMenu from './subcomponents/UserMenu';
//Styles
import {default as AsideMenuStyles} from './AsideMenu.module.scss';
const style = bemCssModules(AsideMenuStyles);

const ADMIN_TYPE = 1;

const AsideMenu = () => {

  const { user } = useContext(StoreContext);
  
  const adminMenuComponent = user?.accessLevel===ADMIN_TYPE
    ? <AdminMenu/>
    : null
  return ( 
    <aside className={style()}>
      <div className={style('nav-wrapper')}>
      <UserMenu isUserLogged={Boolean(user)}/>
      {adminMenuComponent}

      </div>
    </aside>
   );
}
 
export default AsideMenu;