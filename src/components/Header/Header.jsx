import s from './Header.module.css';
import logo from '../images/logo.png';
import React from 'react';
const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt='logo' />
    </header>
  );
};

export default Header;
