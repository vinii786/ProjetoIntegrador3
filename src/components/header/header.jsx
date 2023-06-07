import '../header/header.css';
import SearchBar from '../searchBar/searchBar';
import CartButton from '../cartButton/CartButton';
import Logo from "../header/img/logo-otinho-1.png";


function Header() {
    return (
      <header className='header'>
        <div className='container'>
          <div>
            <img className="logo" style={{maxWidth: '200px'}}  src={Logo} alt="logo" />
          </div>
          <SearchBar />
          <CartButton />
        </div>
      </header>
    );
}

export default Header;