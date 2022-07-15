import React from 'react';
import FriendsItem from './FriendsItem';
import s from './Friends.module.css';

const Friends = (props) => {
  let friendsElements = props.sidebar.map((f) => (
    <FriendsItem name={f.name} url={f.url} />
  ));
  return (
    <>
      <h3>Friends</h3>
      <div className={s.friends}>{friendsElements}</div>
    </>
  );
};

export default Friends;
