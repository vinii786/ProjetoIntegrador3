import '../header/header.css'
import logo from '../header/img/logo-otinho-1.png'
import lupa from '../header/img/find.png'
import carrinho from '../header/img/carrinho-carrinho.png'

function Header() {
    return(
        <div className='header'>
            <div className='logo'>
                <img src={ logo }/>
            </div>
            <div className="search-bar">
                <input placeholder="Título"/>
                <img src={ lupa } style={{ height: 25, display: "absolute" }}/>
            </div>
            <div className='carrinho'>
                <img src={ carrinho } style={{ height: 35 }}/>
                <p>meu carrinho</p>
                <p>oiue</p>
            </div>
        </div>
    )

}

export default Header;