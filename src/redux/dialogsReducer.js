const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {
      name: 'Sergey',
      id: 1,
    },
    {
      name: 'Andrew',
      id: 2,
    },
    {
      name: 'Alex',
      id: 3,
    },
    {
      name: 'Vlad',
      id: 4,
    },
  ],
  messages: [
    {
      message: 'Hello',
      id: 1,
    },
    {
      message: 'Helweerefdlo',
      id: 2,
    },
    {
      message: 'Aldfsewex',
      id: 3,
    },
    {
      message: 'Vwefewflad',
      id: 4,
    },
  ],
  newMessageText: 'Hello',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 0,
        message: state.newMessageText,
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newMessage;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMessageActionCreate = () => ({ type: ADD_MESSAGE });

export const updateNewMassageTextActionCreate = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export default dialogsReducer;
