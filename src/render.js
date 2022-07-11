import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  addPost,
  updateNewPostText,
  updateNewMessageText,
  addMessage,
} from './redux/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        data={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText}
        addMessage={addMessage}
      />
    </React.StrictMode>
  );
};
