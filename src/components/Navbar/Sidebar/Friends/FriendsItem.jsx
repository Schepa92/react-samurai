import React from 'react';
import s from './Friends.module.css';

const FriendsItem = (props) => {
  return (
    <div>
      <img className={s.avatar} src={props.url} alt='avatar' />
      <p className={s.text}>{props.name}</p>
    </div>
  );
};

export default FriendsItem;
