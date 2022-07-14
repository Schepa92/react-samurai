const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 0,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = '';
      break;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      break;

    default:
      return state;
  }
  return state;
};

export const addMessageActionCreate = () => ({ type: ADD_MESSAGE });

export const updateNewMassageTextActionCreate = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export default dialogsReducer;
