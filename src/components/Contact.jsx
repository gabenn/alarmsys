//Libraries
import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
//Context
//Components
import Form from './subcomponents/Form';
import GoogleMapComp from './subcomponents/GoogleMapComp';
//Styles

const Contact = () => {  
  return ( 
    <>
      <Form />
      <GoogleMapComp 
        onLoad={map => {
          const bounds = new window.google.maps.LatLngBounds();
          map.fitBounds(bounds);
        }}
        onUnmount={map => {
          // do your stuff before map is unmounted
        }}
      />
    </>
   );
}
 
export default Contact;