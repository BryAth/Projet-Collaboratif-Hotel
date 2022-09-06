import NavBar from '../../components/nav-bar/nav-bar';
import SearchBar from '../../components/search-bar/search-bar';
import style from './hotel.module.css'
// import '../../data/hotel.json'
import hotel from '../../data/hotel.json'
import HotelItem from './hotel-item';


const Hotel = ({nomHotel}) => {
   
    return (
        <div className={style.ensemblehotel} >
            <NavBar />
            <SearchBar />
            <div>
                <h1 className={style.hotel}>Hôtels</h1>
                <div className={style.hotelframe}>
            {hotel.map(h=><HotelItem  {...h}/>)}
            {hotel.map(h=><HotelItem  {...h}/>)}
            {hotel.map(h=><HotelItem  {...h}/>)}

                    
                </div>

                
            </div>
        </div>
    );
};



export default Hotel;