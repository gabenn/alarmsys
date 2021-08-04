//Libraries
import bemCssModules from 'bem-css-modules';
import React, {useState} from 'react';
//Context
//Components
//Styles
import { default as OfferStyles} from '../../styles/AboutArticle.module.scss';
const style = bemCssModules(OfferStyles);

const AboutArticle = (props) => {

  // id = 1 ? <h1>{TITLE}</h1> : <h2>TITLE</h2>

  const {data, activePage} = props;
  const {title, text1, text2, text3 } = data[activePage];

  const header = activePage === 0 ? <h1>{title}</h1> : <h2>{title}</h2>

  return ( 
    <article className={style()}>
    {header}
    <div className={style('content-wrapper')}>
      <section className={style('container')}>
        <div>{text1}</div>
      </section>
      <section className={style('container')}>
        <div>{text3}</div>
        <div>{text2}</div>
      </section>
    </div>
    </article>
   );
}
 
export default AboutArticle;