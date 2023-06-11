import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import BuyButton from '../buyButton/buyButton'
function Medicamentos(){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/static/Medicamentos_home.json').then((Response) => Response.json())
            .then(setData);
    }, [])

    return(
        <div className="containerBar">
            <div className="titles">
                <h1>Medicamentos</h1>
                <Link to={'/medicamentos'}>
                <p>Veja mais</p>
                </Link>
            </div>
            <div className="teste">
                {data.map((item) => {
                    const { name, image, price } = item;
                    return (
                        <div className="prod_cards">
                            <div className="prods">
                                
                                <img src={ image } alt="" />
                                <h1>{ name }</h1>
                                <p>{ price }</p>
                                <BuyButton />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Medicamentos;