import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import React from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavBar />
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/profile/:profileId' element={<ProfileContainer />} />
          <Route path='/profile/' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
