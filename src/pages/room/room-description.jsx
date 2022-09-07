import NavBar from "../../components/nav-bar/nav-bar";
import SearchBar from "../../components/search-bar/search-bar";
import style from '../room/room-description.module.css'
import chambres from '../../data/chambre.json'
import { useParams } from "react-router-dom";
import { useEffect,useState} from "react";

const RoomDescription = ({}) => {

    const {id} = useParams()
    const [chambre,setChambre]=useState({})
// console.log(chambre[1].nomChambre);
    useEffect(()=>{
        setChambre(
            chambres.find(c=>c.id==id)
            )
        
    },[id,chambre])

    return (
        <div className={style.ensembleChambre} >
            <NavBar />
            <SearchBar />
            <div>
                <h1 className={style.chambre}>Descritpion</h1>
                <div className={style.roomframe}>
                    <img src={chambre.image} alt="Photo Chambre" />
                    <div className={style.description}>

                        <p>Nom: {chambre.nomChambre}</p>
                        <p>Description: {chambre.descriptionCourte}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDescription;