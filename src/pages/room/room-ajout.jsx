import { useForm } from 'react-hook-form';
import axios from 'axios';

import style from '../hotel/hotel-ajout.module.css';
import { useNavigate } from 'react-router-dom';

const RoomAjout = () => {

    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const onRegisterRoom = (data) => {
        console.log(data);    // data contient tout ce qu'il y a dans register

        axios.post('http://localhost:8080/api/chambres', data)
            .then(function (response) {
                // console.log(response);
                navigate('/chambres')
            })
            .catch(function (error) {
                // console.log(error);
            });

    }
    
    return (
        <>
            <div  className={style.loginContainer}>
                <form onSubmit={handleSubmit(onRegisterRoom)}>
                    <h1>Ajouter une chambre</h1>
                    <input id="nom" type="text" placeholder="Nom de la chambre" {...register('nom')} />
                    <input id="descriptionCourte" type="text" placeholder="Description courte" {...register('descriptionCourte')} />
                    <input id="descriptionLongue" type="text" placeholder="Description longue" {...register('descriptionLongue')} />
                    <input id="hotel" type="text" placeholder="Hôtel" {...register('hotel')} />
                    <input id="type" type="text" placeholder="Type" {...register('type')} />
                    <input id="nombreDePersonnes" type="number" placeholder="Nombre de personnes" {...register('nombreDePersonnes')} />
                    <input id="prix" type="number" placeholder="Prix en euros" {...register('prix')} />
                    <input id="salleDeBain" type="number" placeholder="Nombre de salles de bain" {...register('salleDeBain')} />
                    <input id="nombreDeWc" type="number" placeholder="Nombre de wc" {...register('nombreDeWc')} />

                    <article>
                        <div>
                            <label htmlFor='balcon'>Balcon</label>
                            <input id="balcon" type="checkbox" {...register('balcon')} />
                        </div>
                        <div>
                            <label htmlFor='airConditione'>Air conditionné</label>
                            <input id="airConditione" type="checkbox" {...register('airConditione')} />
                        </div>
                        <div>
                            <label htmlFor='wifi'>Wifi</label>
                            <input id="wifi" type="checkbox" {...register('wifi')} />
                        </div>
                        <div>
                            <label htmlFor='minibar'>Mini bar</label>
                            <input id="minibar" type="checkbox" {...register('minibar')} />
                        </div>
                        <div>
                            <label htmlFor='animaux'>Animaux</label>
                            <input id="animaux" type="checkbox" {...register('animaux')} />
                        </div>
                        <div>
                            <label htmlFor='tv'>TV</label>
                            <input id="tv" type="checkbox" {...register('tv')} />
                        </div>
                        <div>
                            <label htmlFor='dejeuner'>Déjeuner</label>
                            <input id="dejeuner" type="checkbox" {...register('dejeuner')} />
                        </div>
                        <div>
                            <label htmlFor='disponible'>Disponible</label>
                            <input id="disponible" type="checkbox" {...register('disponible')} />
                        </div>
                        <div>
                            <label htmlFor='chambrestatus'>Status de la chambre</label>
                            <input id="chambrestatus" type="checkbox" {...register('chambrestatus')} />
                        </div>
                    </article>
                    <input id="dateDebut" type="text" placeholder="Date début réservation"  {...register('dateDebut')} />
                    <input id="dateFin" type="text" placeholder="Date fin réservation"  {...register('dateFin')} />
                    <input id="image" type="text" placeholder="URL image"  {...register('image')} />
                    
                    {/* <Link to ='/hotels'><button type="submit">Ajouter</button></Link> */}

                    <button type='submit'>Ajouter</button>

                    {/* {errorMsg && (
                        <p>{errorMsg}</p>
                        )} */}
                </form>
            </div>
        </>
    );
};

export default RoomAjout;