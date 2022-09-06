
import style from '../hotel/hotel-item.module.css'

const RoomItem= ({nomChambre,descriptionCourte,descriptionLongue,type,prix,salleDeBain,nombredeWc,options}) => {
    return (
        <article className={style.blabla}>
            {/* <img src={image} alt="Photo Hotel" /> */}
            <div className={style.description}>
            <p>{nomChambre}</p>
            {/* <p>{etoiles} étoiles</p>
            <p>Piscine: {piscine}</p>
            <p>Voiturier: {voiturier}</p>
            <p>Room service: {roomService}</p>
        
            <p>Adresse:  {adresse.pays} {adresse.rue} {adresse.CP} {adresse.num}</p>
            <p>Tel: {telephone}</p>
            <p>Email: {email}</p>
            <p>Nbres chambres : {nombresChambres}</p> */}

            </div>
        </article>
    );
};

export default RoomItem;