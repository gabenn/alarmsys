//Libraries
import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';

//Components
import Course from '../Course/Course';
//Styles
import {default as CoursesStyles} from './Courses.module.scss';
import { StoreContext } from '../../store/StoreProvider';
const style = bemCssModules(CoursesStyles);

const Courses = () => {
  const { courses } = useContext(StoreContext);
  console.log(courses);
  const coursesElems = courses.map(course =><Course key={course.id} {...course} />)

  return ( 
    <section className={style()}>
      <h2 className={style('title')}></h2>
      <ul className={style('list')}>
        {coursesElems}
      </ul>
    </section>
   );
}
 
export default Courses;