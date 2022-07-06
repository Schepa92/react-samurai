import s from './Header.module.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo}></img>
    </header>
  );
};

export default Header;
