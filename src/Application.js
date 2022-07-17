import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const Application = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
};

export default Application;
