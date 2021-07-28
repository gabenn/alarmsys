//Libraries
import bemCssModules from 'bem-css-modules';
import React, { useContext, useEffect, useState } from 'react';
//Context
//Components
//Styles
import { default as FormStyles} from '../../styles/Form.module.scss';
const style = bemCssModules(FormStyles);

const Form = () => {
  
  const [ nameValue, setNameValue ] = useState('')
  const [ subjectValue, setSubjectValue ] = useState('')
  const [ mailValue, setMailValue ] = useState('')
  const [ mailTextValue, setMailTextValue ] = useState('')
  const [ errors, setErrors ] = useState({
    name: false,
    subject: false,
    email: false,
    text: false,
    correct: true,
  })

  const errorMessages = {
    name: "NAZWA POWINNA ZAWIERAĆ CONAJMNIEJ 3 ZNAKI",
    subject: "TEMAT POWININIEN ZAWIERAĆ CONAJMNIEJ 3 ZNAKI",
    email: "NIEPRAWIDŁOWY EMAIL",
    text: "TREŚĆ POWINNA ZAWIERAĆ OD 3 DO 255 ZNAKÓW",
  }

  const validateForm = ()=>{
    let name = false;
    let subject = false;
    let email = false;
    let text = false;
    let correct = false;

    if(nameValue.length>2) name = true;
    if(subjectValue.length>2) subject = true;
    if(mailValue.indexOf('@')!==-1 && mailValue.length>5) email = true;
    if(mailTextValue.length>2 && mailTextValue.length<256) text = true
    if(name && email && subject && text) correct = true;

    return({
      name,
      subject,
      email,
      text,
      correct,
    })
  }


  const handleContactSubmit = (e)=>{
    e.preventDefault();

    const validation = validateForm();
    setErrors(validation)

    if(validation.correct){
      Email.send({
        SecureToken: 'c3a1bde9-8fc6-4376-adb6-435ef3c4c948',
        To : 'alarmsys@alarmsys.pl',
        From : mailValue,
        Subject : subjectValue,
        Body : `
        <html>
          <h1>${subjectValue}</h1>
          <h2>Wiadomość od: ${nameValue} mail: ${mailValue}</h2>
          <p>${mailTextValue}</p>
        </html>`
      })
      .then(message => null)
    }
  }

  const errorsToShow =
  <div className={style('error-box')}>
    <p>{!errors.name ? errorMessages.name : null}</p>
    <p>{!errors.subject ? errorMessages.subject : null}</p>
    <p>{!errors.email ? errorMessages.email : null}</p>
    <p>{!errors.text ? errorMessages.text : null}</p>
  </div>;

  return ( 
    <>
    <form onSubmit={handleContactSubmit} className={style()}>
      <h1>NAPISZ DO NAS</h1>
      <input 
        type="text" 
        className={`${style('input')}`} 
        placeholder='NAZWA FIRMY:' 
        value={nameValue} 
        onChange={({target})=>setNameValue(target.value)} 
      />

      <input 
        type="text" 
        className={`${style('input')}`} 
        placeholder='TEMAT:' 
        value={subjectValue} 
        onChange={({target})=>setSubjectValue(target.value)} 
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
       placeholder='TREŚĆ:'
       value={mailTextValue}
       onChange={({target})=>setMailTextValue(target.value)} 
       cols='40'
       rows='5'
      />

      {!errors.correct && errorsToShow}

      <input
       type="submit"
       className={`${style('input')}`}
       value="WYŚLIJ" 
      />
    </form>
    </>
   );
}
 
export default Form;