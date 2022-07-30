import { connect } from 'react-redux';
import {
  addMessageActionCreate,
  updateNewMassageTextActionCreate,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

// const DialogsContainer = (props) => {
//   // debugger;
//   let state = props.store.getState();

//   let addMessage = () => {
//     let action = addMessageActionCreate();
//     props.store.dispatch(action);
//   };

//   let onMessageChange = (text) => {
//     let action = updateNewMassageTextActionCreate(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <Dialogs
//       addMessage={addMessage}
//       onMessageChange={onMessageChange}
//       dialogs={state.dialogsPage.dialogs}
//       messages={state.dialogsPage.messages}
//       newMessageText={state.dialogsPage.newMessageText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      let action = updateNewMassageTextActionCreate(text);
      dispatch(action);
    },
    addMessage: () => {
      let action = addMessageActionCreate();
      dispatch(action);
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
