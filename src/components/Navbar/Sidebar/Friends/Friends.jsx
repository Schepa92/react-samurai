import React from 'react';
import FriendsItem from './FriendsItem';
import s from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
  // debugger;
  let friendsElements = props.sidebar.map((f) => (
    <FriendsItem name={f.name} url={f.url} key={f.id} />
  ));
  return (
    <>
      <NavLink to='/users'>
        <h3 className={s.sidebarTitle}>Friends</h3>
      </NavLink>
      <div className={s.friends}>{friendsElements}</div>
    </>
  );
};

export default Friends;
