

import NavBar from '../../components/nav-bar/nav-bar';
import SearchBar from '../../components/search-bar/search-bar';
import style from './room-description.module.css'
import chambres from '../../data/chambre.json'
import RoomItem from './room-item';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Room = () => {
    
    const { idHotel } = useParams();

    const [listChambres, setListChambres] = useState([]);

    useEffect(() => {
        // console.log(idHotel);
        console.log(chambres.filter(c => c.hotel === idHotel));
        
        // TODO: requête axios à la place du filter
        let newList = listChambres.filter(c => c.hotel === idHotel);    
        setListChambres(newList)
    }, [idHotel]);

    return (
        <div className={style.ensemblehotel} >
            <NavBar />
            <SearchBar />
            <div>
                <h1 className={style.hotel}>Chambres</h1>
                <div className={style.hotelframe}>
                    {listChambres.map(chambre=><RoomItem  key={chambre.id} {...chambre}/>)}
                </div>

                
            </div>
        </div>
    );
};



export default Room;