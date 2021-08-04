//Libraries
import bemCssModules from 'bem-css-modules';
import React, {useEffect, useState} from 'react';
//Context
//Components
import AboutArticle from './AboutArticle';
import AboutNavigation from './AboutNavigation';
//Styles
import { default as AboutHeaderStyles} from '../../styles/AboutHeader.module.scss';
const style = bemCssModules(AboutHeaderStyles);

const articlesData = [
{
  id:1,
  title: 'Title 1',
  text1: 'Firma ALARMSYS jest na rynku polskim firmą posiadającą dużą wiedzę i doświadczenie w zakresie oceny zagrożeń, projektowania i wykonywania wszelkiego rodzaju instalacji służących ochronie obiektów, przebywających w nich ludzi i zgromadzonego mienia. W ciągu 4 lat działalności firma uczestniczyła w wykonawstwie systemów ochrony o różnym stopniu skomplikowania od najmniejszych systemów dla mieszkań, biur ...  po systemy ochrony placówek banków, jednostek wojskowych, kancelarii tajnych i innych.',
  text2: '2 Dzięki minimalizacji kosztów własnych firma oferuje wysoką konkurencyjność w stosunku do innych firm branży "Systemów ochrony osób i mienia".',
  text3: '3 Prowadzone przez firmę doradztwo i usługi konsultacyjne pozwalają na dobór optymalnego do rodzaju zagrożonego obiektu systemu zabezpieczeń ( wg. klasyfikacji TECHOM ) oraz  konfiguracje urządzeń odpowiadających możliwościom finansowym inwestora przy jednoczesnym zapewnieniu jego niezawodności i wysokiej jakości.',
},
{
  id:2,
  title: 'Title 2',
  text1: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti, eius sequi ab asperiores sapiente aliquid est tempora assumenda labore expedita similique quisquam. Nam, fuga.',
  text2: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti, eius sequi ab asperiores sapiente aliquid est tempora assumenda labore expedita similique quisquam. Nam, fuga.',
  text3: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti, eius sequi ab asperiores sapiente aliquid est tempora assumenda labore expedita similique quisquam. Nam, fuga.',
},
{  
  id:3,
  title: 'Title 3',
  text1: '1 ALARMSYS współpracuje z instalatorami oraz innymi firmami w branży pragnąc przygotować się do wykonawstwa wszelkiego rodzaju systemów zabezpieczeń . Systemy zabezpieczeń projektowane są tak aby stwarzały możliwość rozbudowy lub modyfikacji bez ponoszenia większych kosztów..',
  text2: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti, eius sequi ab asperiores sapiente aliquid est tempora assumenda labore expedita similique quisquam. Nam, fuga.',
  text3: '3 Gwarantujemy profesjonalne usługi w zakresie projektowania zabezpieczeń, instalacji, konserwacji montowanych systemów wraz z podłączeniem do stacji monitorowania alarmów prowadzonych przez współpracujące z nami agencje ochrony.',
},
]

const AboutHeader = () => {

  const [ activeAboutPage, setActiveAboutPage ]= useState(0)

  const handleNavButtonClick =({target})=>{
    setActiveAboutPage(parseInt(target.dataset.value));
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeAboutPage])

  return ( 
    <section className={style()}>
      <AboutArticle data={articlesData} activePage={activeAboutPage}/>
      <AboutNavigation handleClick={handleNavButtonClick} pages={articlesData}/>
    </section>
   );
}
 
export default AboutHeader;