import Logo from '../../components/logo/logo';
import style from './login-page.module.css';


const LoginPage = () => {

    return (
        <>
            <Logo />
            <div className={style.loginContainer}>
                <article>
                    <h1>Login</h1>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Mot de passe" />
                    <button>S'inscrire</button>
                </article>
            </div>
        </>
    );
};
export default LoginPage;