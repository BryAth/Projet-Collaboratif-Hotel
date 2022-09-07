import style from './search-bar.module.css';

import { setCountry } from '../../store/actions/hotel-action';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const SearchBar = () => {

    const { handleSubmit, reset, register } = useForm();
    const dispatch = useDispatch();

    const handleCountry = (data) => {
        dispatch(setCountry(data.country));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(handleCountry)}>
            <div className={style.searchDiv}>
                <input id="country" type="text" placeholder="Pays,Ville..." {...register('country')} />
                <button type='submit'>Chercher</button>
            </div>
        </form>
        
    );
};

export default SearchBar;