import React from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = () => {
  const navList = {
    'Home': '/',
    'About us': '/#about',
    'Contact us': '/#contact',
    'Help page': '/#help',
  };

  return (
    <header className="header">
      <div className="container">
        <Logo logoTitle='My logo'/>
        <Navigation navList={navList}/>
      </div>
    </header>
  )
}

export default Header;
