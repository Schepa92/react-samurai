import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  addPost,
  updateNewPostText,
  updateNewMessageText,
  addMessage,
} from './redux/state';
import App from './App';
import { subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = () => {
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

rerenderTree();

subscribe(rerenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
