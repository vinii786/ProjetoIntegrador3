import '../header/header.css';
import SearchBar from '../searchBar/searchBar';
import CartButton from '../cartButton/CartButton';
import Logo from "../header/img/logo-otinho-1.png";
import { Link } from 'react-router-dom';


function Header() {
    return (
      <header className='header'>
        <div className='container'>
          <div>
            <Link to={ "/" }>
            <img className="logo" style={{maxWidth: '200px'}}  src={Logo} alt="logo" />
            </Link>
          </div>
          <SearchBar />
          <CartButton />
        </div>
      </header>
    );
}

export default Header;