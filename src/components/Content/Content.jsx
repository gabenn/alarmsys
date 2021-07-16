//Libraries
import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import { Redirect, Route, Switch } from 'react-router-dom';

//Components
import Courses from '../Courses/Courses';

//Styles
import {default as ContentStyles} from './Content.module.scss';
import { StoreContext } from '../../store/StoreProvider';
const style = bemCssModules(ContentStyles);

const ADMIN_TYPE = 1;

const Content = () => {

  const { user } = useContext(StoreContext)

  const isUserLogged = Boolean(user);
  const isAdmin = user?.accesLevel === ADMIN_TYPE;
  return ( 
  <main className={style()}>
    <Switch>
      <Route exact path='/' render={()=> <Courses /> }/>
      { isUserLogged && <Route exact path='/my-courses' render={()=><p>Moje kursy</p>} />      }
      { isAdmin && <Route exact path='/manage-courses' render={()=><p>zarzadzaj</p>} />      }
      <Redirect to='/'/>
    </Switch>
  </main>
   );
}
 
export default Content;