import React from 'react';
import {
  addMessageActionCreate,
  updateNewMassageTextActionCreate,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  // debugger;
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreate());
  };

  let onMessageChange = (text) => {
    let action = updateNewMassageTextActionCreate(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;
