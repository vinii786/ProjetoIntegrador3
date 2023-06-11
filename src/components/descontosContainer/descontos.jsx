import { useEffect, useState } from 'react'
import '../destaquesContainer/containerBar.css'
import BuyButton from '../buyButton/buyButton'
import { Link } from "react-router-dom"
function ContainerBar() {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://projeto-integrador3.vercel.app/static/Destaques.json').then((Response) => Response.json())
            .then(setData);
    }, [])

    return (
        <div className="containerBar">
            <div className="titles">
                <h1>Descontos</h1>
                <Link to={'/descontos'}>
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

export default ContainerBar;