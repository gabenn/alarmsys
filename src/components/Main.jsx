//Libraries
import bemCssModules from 'bem-css-modules';
import React from 'react';
import { Link } from 'react-router-dom';
//Context
//Components
//Styles
import { default as MainStyles} from '../styles/Main.module.scss';
const style = bemCssModules(MainStyles);

const Main = () => {
  return ( 
    <section className={style()}>
      <section className={style('image-background')}>
        {/* <h1>Lorem, ipsum dolor.</h1> */}
      </section>
      <section className={style('about')}>
        <section className={style('about-box')}>
          <div className={style('about-info')}>
          Tempor aute nisi ullamco adipisicing ea ipsum incididunt aliquip deserunt culpa cupidatat consectetur mollit. Occaecat ad esse ullamco ut tempor duis. Tempor elit consequat ut officia ut laborum commodo excepteur nostrud est enim deserunt.
          </div>
          <Link to='/about' className={style('about-link')}>
            Dowiedz się więcej
          </Link>
        </section>
        <section className={style('about-box')}>
          <Link to='/offer' className={style('about-link')}>
            Poznaj naszą ofertę
          </Link>
          <div className={style('about-info')}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nesciunt modi optio eligendi nobis, accusantium cum culpa eius. Est, sunt itaque. Quis iusto, architecto culpa perspiciatis obcaecati inventore? 
          </div>
        </section>
        <section className={style('about-box')}>
          <div className={style('about-info')}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nesciunt modi optio eligendi nobis, accusantium cum culpa eius. Est, sunt itaque. Quis iusto, architecto culpa perspiciatis obcaecati inventore? 
          </div>
          <Link to='/contact' className={style('about-link')}>
            Napisz do nas
          </Link>
        </section>
      </section>
    </section>
   );
};
 
export default Main;