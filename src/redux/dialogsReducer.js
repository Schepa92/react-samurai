const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogsData: [
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
  messagesData: [
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
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
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
