import s from './Header.module.css';
import logo from '../images/logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt='logo' />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            <h2>{props.login}</h2>
            <h3 style={{ fontSize: '10px' }}>Id:{props.myId}</h3>
            <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <h2>
            <NavLink to={'/login'}>Login</NavLink>
          </h2>
        )}
      </div>
    </header>
  );
};

export default Header;
