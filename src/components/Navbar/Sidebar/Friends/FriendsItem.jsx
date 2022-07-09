import avatar from '../../../images/avatar.jpg';
import React from 'react';
import s from './Friends.module.css';

const FriendsItem = (props) => {
  return (
    <div>
      <img className={s.avatar} src={props.url}></img>
      <p className={s.text}>{props.name}</p>
    </div>
  );
};

export default FriendsItem;
