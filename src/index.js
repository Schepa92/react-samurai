import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
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
];

let messagesData = [
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
];

let postData = [
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
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      dialogsData={dialogsData}
      messagesData={messagesData}
      postData={postData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
