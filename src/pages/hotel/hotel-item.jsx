

import style from './hotel-item.module.css'

const HotelItem = ({nomHotel,etoiles,adresse,telephone,email,nombresChambres,piscine,voiturier,roomService,image}) => {
    return (
        <article className={style.blabla}>
            <img src={image} alt="Photo Hotel" />
            <div className={style.description}>
            <p>{nomHotel}</p>
            <p>{etoiles} étoiles</p>
            <p>Piscine: {piscine}</p>
            <p>Voiturier: {voiturier}</p>
            <p>Room service: {roomService}</p>
        
            <p>Adresse:  {adresse.pays} {adresse.rue} {adresse.CP} {adresse.num}</p>
            <p>Tel: {telephone}</p>
            <p>Email: {email}</p>
            <p>Nbres chambres : {nombresChambres}</p>

            </div>
        </article>
    );
};

export default HotelItem;