import { rerenderTree } from '../render';

let state = {
  profilePage: {
    postData: [
      {
        id: 1,
        message: 'How are you?',
        likesCount: 12,
      },
      {
        id: 2,
        message: 'My friend',
        likesCount: 72,
      },
      {
        id: 1,
        message: 'How are you?',
        likesCount: 12,
      },
    ],
    newPostText: '',
  },
  dialogsPage: {
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
  },
  sidebar: [
    {
      name: 'Sergey',
      url: 'https://cspromogame.ru//storage/upload_images/avatars/856.jpg',
    },
    {
      name: 'Andrew',
      url: 'https://cspromogame.ru//storage/upload_images/avatars/858.jpg',
    },
    {
      name: 'Alex',
      url: 'https://cspromogame.ru//storage/upload_images/avatars/4169.jpg',
    },
    {
      name: 'Valera',
      url: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg',
    },
  ],
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 0,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderTree(state);
};

export let updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderTree(state);
};

window.state = state;

export default state;
