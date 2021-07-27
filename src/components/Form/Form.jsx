//Libraries
import bemCssModules from 'bem-css-modules';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a } from "react-spring";
//Context
//Components
//Styles
import { default as FormStyles} from '../../styles/Form.module.scss';
const style = bemCssModules(FormStyles);

const Form = () => {
  
  const [ nameValue, setNameValue ] = useState('')
  const [ mailValue, setMailValue ]  = useState('')
  const [ mailTextValue, setMailTextValue ]  = useState('')

  const handleContactSubmit = (e)=>{
    e.preventDefault();
    console.log('bajo jajo');
  }

  return ( 
    <form onSubmit={handleContactSubmit} className={style()}>
      <h1>NAPISZ DO NAS</h1>
      <input 
        type="text" 
        className={`${style('input')}`} 
        placeholder='IMIĘ I NAZWISKO:' 
        value={nameValue} 
        onChange={({target})=>setNameValue(target.value)} 
      />

      <input 
        type="text" 
        className={`${style('input')}`} 
        placeholder='EMAIL:' 
        value={mailValue} 
        onChange={({target})=>setMailValue(target.value)} 
      />

      <textarea
       className={`${style('input')}`}
       placeholder='TREŚĆ MAILA:'
       value={mailTextValue}
       onChange={({target})=>setMailTextValue(target.value)} 
       cols='40'
       rows='5'
      />

      <input
       type="submit"
       className={`${style('input')}`}
       value="POTWIERDŹ" 
      />
    </form>
   );
}
 
export default Form;