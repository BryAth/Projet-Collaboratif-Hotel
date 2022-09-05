
import style from "./search-bar.module.css"

const SearchBar = () => {
    return (
        <div className={style.recherche}>
            <input type="text" className={style.input} placeholder="Pays,Ville..." />
        </div>
    );
};

export default SearchBar;