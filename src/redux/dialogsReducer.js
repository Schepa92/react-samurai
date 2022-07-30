const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let idCount = new Date().toLocaleString();
      let newMessage = {
        id: idCount,
        message: action.textMessage,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

export const addMessage = (text) => ({ type: ADD_MESSAGE, textMessage: text });

export default dialogsReducer;
