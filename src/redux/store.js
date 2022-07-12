let store = {
  _state: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 0,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;

window.store = store;
