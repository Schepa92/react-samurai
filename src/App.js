import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper__content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
