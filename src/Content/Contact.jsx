//Libraries
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as a } from "react-spring";
//Context
//Components
import Form from '../components/Form/Form';
//Styles

const Contact = () => {
  return ( 
    <section>
      <Form />
    </section>
   );
}
 
export default Contact;