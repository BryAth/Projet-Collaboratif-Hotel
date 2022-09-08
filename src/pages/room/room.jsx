

import NavBar from '../../components/nav-bar/nav-bar';
import SearchBar from '../../components/search-bar/search-bar';
// import style from './room-description.module.css'
import style from '../hotel/hotel.module.css'
import chambres from '../../data/chambre.json'
import RoomItem from './room-item';

const Room = ({nomChambre,descriptionCourte,descriptionLongue,type,prix,salleDeBain,nombredeWc,options}) => {

    return (
        <div className={style.ensemblehotel} >
            <NavBar />
            <SearchBar />
            <div>
                <h1 className={style.hotel}>Chambres</h1>
                <div className={style.hotelframe}>
                    {chambres.map(chambre=><RoomItem  key={chambre.id} {...chambre}/>)}
                    {chambres.map(chambre=><RoomItem  key={chambre.id} {...chambre}/>)}
                    {chambres.map(chambre=><RoomItem  key={chambre.id} {...chambre}/>)}
                </div>

                
            </div>
        </div>
    );
};



export default Room;