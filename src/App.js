import React from 'react';
import './styles/App.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import ScrollToTop from './scripts/ScrollToTop';

const App = () => {
  return ( 
    <>
      <Header />
      <div className='content-wrapper'>
        <ScrollToTop />
        <Content />        
      </div>
      <Footer />
    </>
   );
}
 
export default App;