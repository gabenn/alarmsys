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
        <div>
          Firma ALARMSYS jest na rynku polskim firmą posiadającą dużą wiedzę i doświadczenie w zakresie oceny zagrożeń, projektowania i wykonywania wszelkiego rodzaju instalacji służących ochronie    obiektów, przebywających w nich ludzi i zgromadzonego mienia. W ciągu 4 lat działalności firma uczestniczyła w wykonawstwie systemów ochrony o różnym stopniu skomplikowania od najmniejszych   systemów dla mieszkań, biur ...  po systemy ochrony placówek banków, jednostek wojskowych, kancelarii tajnych i innych.
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
      </section>
    </section>
   );
};
 
export default Main;