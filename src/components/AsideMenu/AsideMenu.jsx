import bemCssModules from 'bem-css-modules';
import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import {default as AsideMenuStyles} from './AsideMenu.module.scss';
import AdminMenu from './subcomponents/AdminMenu';
import UserMenu from './subcomponents/UserMenu';
const style = bemCssModules(AsideMenuStyles);

const ADMIN_TYPE = 1;

const AsideMenu = () => {

  const { user } = useContext(StoreContext);
  
  const adminMenuComponent = user?.accessLevel===ADMIN_TYPE
    ? <AdminMenu/>
    : null
  return ( 
    <aside className={style()}>
      <UserMenu isUserLogged={Boolean(user)}/>
      {adminMenuComponent}
    </aside>
   );
}
 
export default AsideMenu;