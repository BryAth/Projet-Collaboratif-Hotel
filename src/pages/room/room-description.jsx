import NavBar from "../../components/nav-bar/nav-bar";
import SearchBar from "../../components/search-bar/search-bar";
import style from '../room/room-description.module.css'
import chambres from '../../data/chambre.json'
import { useParams } from "react-router-dom";
import { useEffect,useState} from "react";
import { Link } from "react-router-dom";

const RoomDescription = ({}) => {

    const {idChambre} = useParams()
    const [chambre,setChambre]=useState({})
// console.log(chambre[1].nomChambre);
    useEffect(()=>{
        setChambre(
            chambres.find(c=>c.id==idChambre)
            )
        
    },[idChambre,chambre])

    return (
        <div className={style.ensembleChambre} >
            <NavBar />
            <SearchBar />
            <div>
                <h1 className={style.chambre}>Description</h1>
                <div className={style.roomframe}>
                   <div className={style.nomChambre}>
                    <img src={chambre.image} alt="Photo Chambre" className={style.imgChambre} />
                        <p>Description: {chambre.descriptionCourte}</p>
                        </div>
                    <div className={style.description}>
                        <p>Nom: {chambre.nomChambre}</p>
                        <p>Type: {chambre.type}</p>
                        <p>Prix: {chambre.prix} €</p>
                        <p>Nbres Personnes: {chambre.nombrePersonnes}</p>
                        <p>Salle de bain: {chambre.salleDeBain}</p>
                        <p>Wc: {chambre.nombredeWc}</p>
                        <p>Type: {chambre.type}</p>
                        {/* <p>{chambre.options}</p> */}
                        <p>Description: {chambre.descriptionLongue}</p>

                        <Link to ='/reservation'><button type="submit"  class={style.reserver} >Reservation</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDescription;