import { useEffect, useState } from 'react'
import './containerBar.css'
import BuyButton from '../buyButton/buyButton'
function ContainerBar() {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/static/Destaques.json').then((Response) => Response.json())
            .then(setData);
    }, [])

    return (
        <div className="containerBar">
            <div className="titles">
                <h1>Destaques</h1>
                <p>Veja mais</p>
            </div>
            <div className="teste">
                {data.map((item) => {
                    const { name, infos, image, price } = item;
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