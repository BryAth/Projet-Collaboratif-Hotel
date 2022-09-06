import style from './login-register.module.css';
import { Link } from 'react-router-dom';

const LoginRegister = () => {
    return (
        <div className={style.divLogin}>
            <Link to="/connexion"><button className={style.loginButton}>Login</button></Link>
            
        </div>
    );
};

export default LoginRegister;