import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Main from './Main';
import Offer from './Offer';
//Styles
import bemCssModules from 'bem-css-modules';
import { default as ContentStyles} from '../styles/Content.module.scss';
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