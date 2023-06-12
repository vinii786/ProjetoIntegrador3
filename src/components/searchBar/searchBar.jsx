import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import '../searchBar/searchBar.css';
import { useNavigate } from "react-router-dom"


function SearchBar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    function handleFind(event) {
        event.preventDefault();
        navigate(`/produto?name=${searchValue}`)
    }

    return ( 
    <form className="search-bar" onSubmit={handleFind} >
        <input 
        type="search" 
        value={searchValue}
        placeholder='Buscar Produtos' 
        className="search_input" 
        onChange={ ({target})  => setSearchValue( target.value) }
        required
        />
             
        <button type='submit' className="search_button">
              <GoSearch />
        </button>
     </form>

     );
}

export default SearchBar;