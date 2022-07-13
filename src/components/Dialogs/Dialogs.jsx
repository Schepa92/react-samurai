import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {
  addMessageActionCreate,
  updateNewMassageTextActionCreate,
} from '../../redux/store';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageText = props.dialogsPage.newMessageText;

  let addMessage = (event) => {
    props.dispatch(addMessageActionCreate());
    event.target.value = '';
  };

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewMassageTextActionCreate(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <textarea
          value={newMessageText}
          onChange={onMessageChange}
          placeholder='Enter your message'
        ></textarea>
        <button onClick={addMessage}>Add Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
