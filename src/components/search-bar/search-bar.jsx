import style from './search-bar.module.css';

const SearchBar = () => {
    return (
        <div className={style.searchDiv}>
            <input type="text" placeholder="Pays,Ville..." />
            <button>Chercher</button>
        </div>
    );
};

export default SearchBar;