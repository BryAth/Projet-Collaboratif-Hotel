

import style from './hotel-item.module.css'

const HotelItem = ({nomHotel,etoiles,adresse,telephone,email,nombreChambres,piscine,voiturier,roomService,image, id}) => {
    return (
        <article className={style.blabla}>
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
        </article>
    );
};

export default HotelItem;