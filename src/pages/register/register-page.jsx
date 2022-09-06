import { Link } from 'react-router-dom';
import Logo from "../../components/logo/logo";
import style from './register-page.module.css';


// import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions/auth-action';

const RegisterPage = () => {
    
    // const [nom, setNom] = useState('');
    // const [prenom, setPrenom] = useState('');
    // const [email, setEmail] = useState('');
    // const [pays, setPays] = useState('');
    // const [telephone, setTelephone] = useState('');
    // const [motDePasse, setMotDePasse] = useState('');
    // --------------------------------------------------
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // }

    const { register, handleSubmit,reset } = useForm();
    const dispatch = useDispatch();
    const errorMsg = useSelector(state => state.auth.errorMsg);

    const onRegister = (data) => {
        // console.log('register');
        dispatch(registerUser(data));
        reset();
    }

    return (
        <div>
            <Logo />
            <div className={style.registerContainer}>
                <form onSubmit={handleSubmit(onRegister)}>
                    <h1>Register</h1>
                    {/* <input type="text" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} /> */}
                    <input id="lastName" type="text" placeholder="Nom" {...register('lastName')} />
                    <input id="firstName" type="text" placeholder="Prénom" {...register('firstName')} />
                    <input id="email" type="text" placeholder="Email" {...register('email')} />
                    <input id="country" type="text" placeholder="Pays" {...register('country')} />
                    <input id="phone" type="text" placeholder="Téléphone" {...register('phone')} />
                    <input id="password" type="text" placeholder="Mot de passe" {...register('password')} />
                    <Link to='/a-propos'><button type="submit">S'inscrire</button></Link>

                    {errorMsg && (
                        <p>{errorMsg}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;