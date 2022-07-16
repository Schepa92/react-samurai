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
    case ADD_MESSAGE:
      let idCount = new Date().toLocaleString();
      let newMessage = {
        id: idCount,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage],
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newMessage };

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
