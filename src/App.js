import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper__content'>
          <Routes>
            <Route
              path='/profile'
              element={<Profile postData={props.postData} />}
            />
            <Route
              path='/dialogs'
              element={
                <Dialogs
                  dialogsData={props.dialogsData}
                  messagesData={props.messagesData}
                />
              }
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
