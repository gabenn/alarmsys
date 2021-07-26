//Libraries
import bemCssModules from 'bem-css-modules';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a } from "react-spring";
//Context
//Components
//Styles
import { default as MainStyles} from '../styles/Main.module.scss';
const style = bemCssModules(MainStyles);

const Main = () => {
  return ( 
    <section className={style()}>
      <section className={style('image-background')}>
        <h1>Nasza firma jest koks zobacz niżej</h1>
      </section>
      <section className={style('about')}>
        <section className={style('about-box')}>
          <div className={style('about-info')}>
          Firma ALARMSYS jest na rynku polskim firmą posiadającą dużą wiedzę i doświadczenie w zakresie oceny zagrożeń, projektowania i wykonywania wszelkiego rodzaju instalacji służących ochronie obiektów, przebywających w nich ludzi i zgromadzonego mienia. W ciągu 4 lat działalności firma uczestniczyła w wykonawstwie systemów ochrony o różnym stopniu skomplikowania od najmniejszych systemów dla mieszkań, biur ...  po systemy ochrony placówek banków, jednostek wojskowych, kancelarii tajnych i innych.
          </div>
          <Link to='/about' className={style('about-link')}>
            Dowiedz się więcej o naszej firmie
          </Link>
        </section>
        <section className={style('about-box')}>
          <Link to='/offer' className={style('about-link')}>
            Lorem ipsum dolor sit amet consectetur.
          </Link>
          <div className={style('about-info')}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nesciunt modi optio eligendi nobis, accusantium cum culpa eius. Est, sunt itaque. Quis iusto, architecto culpa perspiciatis obcaecati inventore? Vero similique nemo possimus. Error, et deserunt? Asperiores facere obcaecati distinctio autem dolor tempore quidem illum accusantium, harum dolore. Doloremque, alias praesentium!
          </div>
        </section>
        <section className={style('about-box')}>
          <div className={style('about-info')}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nesciunt modi optio eligendi nobis, accusantium cum culpa eius. Est, sunt itaque. Quis iusto, architecto culpa perspiciatis obcaecati inventore? Vero similique nemo possimus. Error, et deserunt? Asperiores facere obcaecati distinctio autem dolor tempore quidem illum accusantium, harum dolore. Doloremque, alias praesentium!
          </div>
          <Link to='/contact' className={style('about-link')}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Link>
        </section>
      </section>
    </section>
   );
};
 
export default Main;