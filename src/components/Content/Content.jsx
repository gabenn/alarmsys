import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../../Content/About';
import Contact from '../../Content/Contact';
import Main from '../../Content/Main';
import Offer from '../../Content/Offer';
//Styles
import bemCssModules from 'bem-css-modules';
import { default as ContentStyles} from '../../styles/Content.module.scss';
const style = bemCssModules(ContentStyles);
const Content = () => {
  return ( 
    <main className={style()}>
      <Switch>
        <Route exact path='/' render={Main} />
        <Route exact path='/about' render={About} />
        <Route exact path='/offer' render={Offer} />
        <Route exact path='/contact' render={Contact} />
      </Switch>
    </main>
   );
}
 
export default Content;