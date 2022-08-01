import React from 'react';
import s from './Friends.module.css';
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../../images/logo23.png';
import { useEffect } from 'react';

const FriendsItem = (props) => {
  return (
    <div>
      <img
        className={s.avatar}
        src={
          props.u.photos.small != null ? props.u.photos.small : defaultAvatar
        }
        alt=''
      />
      <p className={s.text}>{props.name}</p>
    </div>
  );
};

const Friends = (props) => {
  useEffect(() => {
    props.getUsers();
  }, []);
  let friendsElements = props.users.map((u) => (
    <FriendsItem name={u.name} url={u.url} key={u.id} u={u} />
  ));
  if (props.isAuth) {
    return (
      <>
        <NavLink to='/users'>
          <h3 className={s.sidebarTitle}>Friends</h3>
        </NavLink>
        <div className={s.friends}>{friendsElements}</div>
      </>
    );
  }
};

export default Friends;
