import { Link } from 'react-router-dom';
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
                    <Link to='/enregistrement'><button>S'inscrire</button></Link>
                </article>
            </div>
        </>
    );
};
export default LoginPage;