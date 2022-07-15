import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import React from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  // debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar /*store={props.store}*/ />
        <div className='app-wrapper__content'>
          <Routes>
            <Route
              path='/profile'
              element={<Profile /*store={props.store}*/ />}
            />
            <Route
              path='/dialogs'
              element={<DialogsContainer /*store={props.store}*/ />}
            />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
