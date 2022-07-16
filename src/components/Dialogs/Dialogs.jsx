import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
  // debugger;
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  let newMessageText = props.newMessageText;

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.onMessageChange(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.messagesElements}>{messagesElements}</div>
        <div className={s.sendMess}>
          <textarea
            value={newMessageText}
            onChange={onMessageChange}
            placeholder='Enter your message'
          ></textarea>
          <button onClick={addMessage}>Add Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
