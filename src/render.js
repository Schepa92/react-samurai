import React from 'react';
import ReactDOM from 'react-dom/client';
import { addPost } from './redux/state';
import App from './App';

export let rerenderTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App data={state} addPost={addPost} />
    </React.StrictMode>
  );
};
