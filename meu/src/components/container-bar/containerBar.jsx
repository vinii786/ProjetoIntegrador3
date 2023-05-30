import '../container-bar/containerBar.css'
import Remedio from '../container-bar/imgs/rivotril.png'

function containerBar(){
    return(
        <div className='containerBar'>
            <div className="destaques">
                <div className="titles">
                    <h1>Destaques</h1>
                    <p>Veja mais</p>
                </div>
            </div>

            <div className="content">
                <div className="prod_cards">
                    <div className="prods">
                        <img src={ Remedio } alt="" />
                        <p>"(infos aparecerao aqui)"</p>
                    </div>
                    <div className="prods">
                        <img src={ Remedio } alt="" />
                        <p>"(infos aparecerao aqui)"</p>
                    </div>
                    <div className="prods">
                        <img src={ Remedio } alt="" />
                        <p>"(infos aparecerao aqui)"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default containerBar;