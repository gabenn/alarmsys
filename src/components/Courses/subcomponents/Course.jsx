//Libraries
import React from 'react';
import bemCssModules from 'bem-css-modules';

//Components

//Styles
import {default as CourseStyles} from './Course.module.scss';
const style = bemCssModules(CourseStyles);

const Course = ({authors,img,price,title}) => {
  
  const allAuthors = authors.join(', ');

  return ( 
    <article className={style()}>
      <h3 className={'title'}></h3>
      <img src={img} className={style('image')} alt={title} />
      <p className={style('price')}>{price}</p>
      <p className={style('authors')}>{authors.length > 1 ? `Autorzy Kursu: ${allAuthors}` : `Autor Kursu: ${allAuthors}`}</p>
    </article>
   );
}
 
export default Course;