import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper__content'>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
