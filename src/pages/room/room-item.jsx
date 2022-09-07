import { Link } from 'react-router-dom';
import style from '../hotel/hotel-item.module.css'

const RoomItem= ({id,nomChambre,descriptionCourte,descriptionLongue,type,prix,salleDeBain,nombredeWc,options}) => {
    return (
        //dans votre <Link to ='/description/${id}'> 
        //l artricle devra etrre pris dans un link
        <Link to ={`/description/${id}`}>
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
        </Link> 
    );
};

export default RoomItem;