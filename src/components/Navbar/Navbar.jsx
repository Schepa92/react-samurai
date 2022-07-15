import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import React from 'react';

const activeLink = ({ isActive }) => (isActive ? s.active : '');

const NavBar = (props) => {
  let state = props.store.getState();

  return (
    <>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' className={activeLink}>
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' className={activeLink}>
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' className={activeLink}>
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className={activeLink}>
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className={activeLink}>
            Settings
          </NavLink>
        </div>
        <div>
          <Sidebar sidebar={state.sidebar} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
