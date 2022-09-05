import LoginRegister from '../auth/login-register';
import Logo from '../logo/logo';
import style from './nav-bar.module.css';

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Logo />
            <LoginRegister />
        </nav>
    );
};

export default NavBar;