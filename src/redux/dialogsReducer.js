const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {
      name: 'Sergey',
      id: 5435341,
    },
    {
      name: 'Andrew',
      id: 52345342,
    },
    {
      name: 'Alex',
      id: 31452,
    },
    {
      name: 'Vlad',
      id: 43214,
    },
  ],
  messages: [
    {
      message: 'Hello',
      id: 13646,
    },
    {
      message: 'Helweerefdlo',
      id: 265426,
    },
    {
      message: 'Aldfsewex',
      id: 334234,
    },
    {
      message: 'Vwefewflad',
      id: 46675,
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
