import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';
import React from 'react';
const DialogItem = ({ id, name }) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={'/dialogs/' + id}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
