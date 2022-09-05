import style from './login-register.module.css';


const LoginRegister = () => {
    return (
        <div className={style.divLogin}>
            <button className={style.loginButton}>Login</button>
        </div>
    );
};

export default LoginRegister;