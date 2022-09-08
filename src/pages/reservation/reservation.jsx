import style from './reservation.module.css'
import NavBar from '../../components/nav-bar/nav-bar';
import { Link } from 'react-router-dom';

const Reservation = () => {
    return (
        <div>
            <NavBar />
            <article className={style.centre}>
                <div className={style.formReservation}>
                    <h1>Réservation</h1>
                    <p>Date</p>
                    <input type="date" className={style.calendrier} />

                    <div class={style.dropdown}>
                        <button class={style.dropbtn}>Assurance</button>
                        <div class={style.dropdownContent}>
                            <a href="#">Oui</a>
                            <a href="#">Non</a>
                        </div>
                    </div>

                    {/* <Link to ='/connexion'><button type="submit"  class={style.connexionReservation} >Connexion</button></Link> */}
                   
                    <Link to ='/a-propos'> <button type="submit"  class={style.connexionReservation} >Valider</button></Link>
                </div>
            </article>

        </div>
    );
};

export default Reservation;