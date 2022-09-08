import { Link } from 'react-router-dom';
import style from '../hotel/hotel-item.module.css'
import axios from 'axios';

const RoomItem= ({image,_id,nom,descriptionCourte,prix,nombreDePersonnes}) => {

    const onDelete = () => { 
        console.log(_id, nom);     
        // axios.delete('http://localhost:8080/api/chambres', id)
        axios.delete(`http://localhost:8080/api/chambres/${_id}`)
            .then()
            .catch()
    }

    return (
        <article className={style.blablaRoomItem}>
            <Link to ={`/description/${_id}`}>
            
                <img src={image} alt={nom} />
                <div className={style.descriptionRoomItem}>
                    <h3>{nom}</h3>
                    <p>{descriptionCourte}</p>
                    <p>Nombre de personnes : {nombreDePersonnes}</p>
                    <p>Prix : {prix} € / nuit</p>
                </div>
        </Link> 
        <div className={style.adminButtonRoomItem}>
            <button>Modifier l'hôtel</button>
            <button type="submit" onClick={onDelete}>Supprimer l'hôtel</button>
        </div>
    </article>
    );
};

export default RoomItem;