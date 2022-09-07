import NavBar from '../../components/nav-bar/nav-bar';
import SearchBar from '../../components/search-bar/search-bar';
import style from './hotel.module.css'

import hotels from '../../data/hotel.json'
import HotelItem from './hotel-item';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';



const Hotel = () => {


    const country = useSelector(state => state.hotels.country);
    
    // TODO: remplacer hotels2 par hotels et supprimer import de hotels des data
    const [hotels2, setHotels] = useState([]);     

    useEffect(() => {
        if (country === "") {
            axios.get('http://localhost:8080/api/hotels')
                .then((data) => {
                    console.log(data);
                    setHotels(data)
                })
        }
        else {
            axios.get(`http://localhost:8080/api/hotels?country=${country}`)
                .then((data) => {
                    console.log(data);
                    setHotels(data)
                })
        }
    }, [country]);

    return (
        <div className={style.ensemblehotel} >
            <NavBar />
            <SearchBar />
            <div>
                <h1 className={style.hotel}>Hôtels</h1>
                <div className={style.hotelframe}>
                    {hotels.map(hotel=><HotelItem  key={hotel.id} {...hotel}/>)}
                    {hotels.map(hotel=><HotelItem  key={hotel.id} {...hotel}/>)}
                    {hotels.map(hotel=><HotelItem  key={hotel.id} {...hotel}/>)}
                </div>

                
            </div>
        </div>
    );
};



export default Hotel;