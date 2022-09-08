// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import hotels from '../../data/hotel.json';
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { Link } from 'react-router-dom';
import style from './hotel-item.module.css'
const HotelItem = ({nomHotel,etoiles,adresse,telephone,email,nombreChambres,piscine,voiturier,roomService,image, id}) => {

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // const { idHotel } = useParams();

    // const [listHotels, setListHotels] = useState([]);
    const onDelete = (hotels) => {
        
        console.log(id);
        console.log(hotels);
        // console.log(hotels.filter(h => h.id === idHotel));
        
        // TODO: requête axios à la place du filter
        // let newList = listHotels.filter(h => h.hotel === idHotel);    
        // setListHotels(newList)
    }
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    return (
        <article className={style.blabla}>
            <Link to={`/chambres/${id}`}>
                <div>
                    <img src={image} alt="Photo Hotel" />
                        <div className={style.description}>
                        <p>{nomHotel}</p>
                        <p>{etoiles} étoiles</p>
                        <p>Piscine : {piscine ? "Oui" : "Non"}</p>  
                        <p>Voiturier : {voiturier ? "Oui" : "Non"}</p>            
                        <p>Room service : {roomService ? "Oui" : "Non"}</p>
                    
                        <p>Adresse :  {adresse.pays} {adresse.rue} {adresse.CP} {adresse.num}</p>
                        <p>Tel : {telephone}</p>
                        <p>Email : {email}</p>
                        <p>Nbres chambres : {nombreChambres}</p>
                        <button>Voir les chambres</button>
                    </div>
                </div>
            </Link>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className={style.adminButton}>
                <button>Modifier l'hôtel</button>
                <button onClick={onDelete}>Supprimer l'hôtel</button>
            </div>
            {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        </article>
    );
};

export default HotelItem;