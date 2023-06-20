import './containerBar.css'
import BuyButton from '../buyButton/buyButton'
import { Link } from "react-router-dom"
function ContainerBar(props) {
    const data = props.data || []

    return (
        <div className="containerBar">
            <div className="titles">
                <h1>{props.title}</h1>
                <Link to={`/${props.title}`}>
                <p>Veja mais</p>
                </Link>
            </div>
            <div className="teste">
                {data.map((item) => {
                    const { name, image, price } = item;
                    return (
                        <div className="prod_cards">
                            <div className="prods">
                            <Link to={`/produto?name=${name}`} className='links' >
                                <img src={ image } alt="" />
                                <h1>{ name }</h1>
                                <p>{ price }</p>
                            </Link>
                                <BuyButton produto={item} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        )
}

export default ContainerBar;