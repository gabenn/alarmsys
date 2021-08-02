//Libraries
import bemCssModules from 'bem-css-modules';
import React from 'react';
//Context
//Components
//Styles
import { default as OfferStyles} from '../styles/Offer.module.scss';
const style = bemCssModules(OfferStyles);

const Offer = () => {
  return ( 
    <section className={style()}>
      Offer
    </section>
   );
}
 
export default Offer;