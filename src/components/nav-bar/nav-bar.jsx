import style from "./nav-bar.module.css"
import Logo from "../logo/logo";
import LoginRegister from "../auth/login-register";


const Navbar = () => {
    return (
        <nav className={style.nav}>
            <Logo />
            <LoginRegister />

        </nav>
    );
};

export default Navbar;