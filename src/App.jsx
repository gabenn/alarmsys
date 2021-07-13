//Libraries
import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
//Components
import Header from './components/Header/Header';
import StoreProvider from './store/StoreProvider';
import AsideMenu from './components/AsideMenu/AsideMenu';
//Styles
import './App.scss';

const App = () => {
  return ( 
    <>
    <StoreProvider>
      <Header />
      <Router>
        <div className='content-wrapper'>
          <AsideMenu />
        </div>
      </Router>
    </StoreProvider> 
    </>
  );
}
 
export default App;