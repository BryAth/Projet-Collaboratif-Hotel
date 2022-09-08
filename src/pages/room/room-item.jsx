import { Link } from 'react-router-dom';
import style from '../hotel/hotel-item.module.css'

const RoomItem= ({image,_id,nom,descriptionCourte,prix}) => {
    return (
        <Link to ={`/description/${_id}`}>
            <article className={style.blabla}>
                <img src={image} alt={nom} />
                <div className={style.description}>
                    <h3>{nom}</h3>
                    <p>{descriptionCourte}</p>
                    <p>Prix : {prix} € / nuit</p>

                </div>
            </article>
        </Link> 
    );
};

export default RoomItem;