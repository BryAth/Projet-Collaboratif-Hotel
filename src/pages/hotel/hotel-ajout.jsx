// import hotels from '../../data/hotel.json'
// import HotelItem from './hotel-item';
// import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import axios from 'axios';

import style from './hotel-ajout.module.css';

const HotelAjout = () => {

    const { handleSubmit, register, reset } = useForm();

    const onRegisterHotel = (data) => {
        console.log(data);    // data contient tout ce qu'il y a dans register

        axios.post('http://localhost:8080/api/hotels', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    
    return (
        <>
            <div  className={style.loginContainer}>
                <form onSubmit={handleSubmit(onRegisterHotel)}>
                    <h1>Ajouter un hôtel</h1>
                    <input id="nom" type="text" placeholder="Nom de l'hôtel" {...register('nom')} />
                    <input id="etoiles" type="number" placeholder="Nombre d'étoiles"  {...register('etoiles')} />
                    <input id="adresse.CP" type="text" placeholder="Code postal"  {...register('adresse.CP')} />
                    <input id="adresse.numero" type="text" placeholder="Numéro"  {...register('adresse.numero')} />
                    <input id="adresse.rue" type="text" placeholder="Rue"  {...register('adresse.rue')} />
                    <input id="adresse.pays" type="text" placeholder="Pays"  {...register('adresse.pays')} />
                    <input id="telephone" type="text" placeholder="Numéro de téléphone"  {...register('telephone')} />
                    <input id="email" type="email" placeholder="Email"  {...register('email')} />
                    <input id="nombreChambres" type="text" placeholder="Nombre de chambres"  {...register('nombreChambres')} />
                    <input id="piscine" type="text" placeholder="Piscine"  {...register('piscine')} />
                    <input id="voiturier" type="text" placeholder="Voiturier"  {...register('voiturier')} />
                    <input id="roomService" type="text" placeholder="Room service"  {...register('roomService')} />
                    <input id="image" type="text" placeholder="URL image"  {...register('image')} />
                    
                    {/* <Link to ='/hotels'><button type="submit">Ajouter</button></Link> */}

                    <button>Ajouter</button>

                    {/* {errorMsg && (
                        <p>{errorMsg}</p>
                        )} */}
                </form>
            </div>
        </>
    );
};

export default HotelAjout;