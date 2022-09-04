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
  text1: '1 Amet id proident in dolor esse ipsum laboris quis sit anim. Ad cillum culpa irure aute adipisicing fugiat enim ipsum non exercitation. Do consequat pariatur voluptate sit esse incididunt labore minim amet anim. Nulla nulla veniam do sit proident velit dolor est magna exercitation sit occaecat tempor aute. Ex cupidatat ea deserunt tempor exercitation sint et in magna do magna laboris.',
  text2: '2 Nostrud do laborum amet est dolor id tempor ullamco ea veniam nulla.',
  text3: '3 Eu Lorem magna aliquip reprehenderit officia laboris dolore sit consequat. Cupidatat pariatur occaecat exercitation ullamco occaecat minim nostrud cupidatat irure nulla exercitation ut est eiusmod. Laborum Lorem qui ipsum mollit.Commodo eiusmod sunt nostrud elit cupidatat est aliquip et sint dolor magna ipsum.',
},
{
  id:2,
  title: 'Title 2',
  text1: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti, eius sequi ab asperiores sapiente aliquid est tempora assumenda labore expedita similique quisquam. Nam, fuga.',
  text2: '2 Ea sunt eu officia ipsum anim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti, eius sequi ab asperiores sapiente aliquid est tempora assumenda labore expedita similique quisquam. Nam, fuga.',
  text3: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti, eius sequi ab asperiores sapiente aliquid est tempora assumenda labore expedita similique quisquam. Nam, fuga. Ullamco nostrud quis magna quis in sit sit ipsum eu irure excepteur.',
},
{  
  id:3,
  title: 'Title 3',
  text1: '1 Officia Lorem deserunt labore veniam ullamco sint in. Pariatur tempor tempor tempor adipisicing anim. Duis in nostrud do pariatur ad. Mollit labore ullamco reprehenderit labore sit Lorem eu pariatur consequat ad quis occaecat ut. Pariatur reprehenderit consectetur nisi eu occaecat dolore cillum cillum.',
  text2: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti, eius sequi ab asperiores sapiente aliquid est tempora assumenda labore expedita similique quisquam. Nam, fuga.',
  text3: '3 Esse exercitation ipsum esse ad ad consectetur dolore. Nisi quis occaecat magna id tempor est Lorem aliqua consectetur. Ex labore incididunt exercitation aute ut nisi deserunt excepteur. Eiusmod consequat deserunt aliqua veniam cupidatat labore tempor proident mollit.',
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