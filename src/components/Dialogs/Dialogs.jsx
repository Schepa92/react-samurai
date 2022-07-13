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

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreate());
    newMessageElement.current.value = '';
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMassageTextActionCreate(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <textarea onChange={onMessageChange} ref={newMessageElement}></textarea>
        <button onClick={addMessage}>Add Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
