import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import '../searchBar/searchBar.css';



function SearchBar() {

const [searchValue, setSearchValue] = useState('');

    return ( 
    <form className="search-bar">
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