import style from './search-bar.module.css';

const SearchBar = () => {
    return (
        <div className={style.divRecherche}>
            <input type="text" placeholder="Pays" />
            <button>Chercher</button>
        </div>
    );
};

export default SearchBar;