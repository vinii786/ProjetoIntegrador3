import { useEffect, useState } from 'react'
import '../container-bar/containerBar.css'

function ContainerBar() {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/static/Destaques.json').then((Response) => Response.json())
            .then(setData);
    }, [])

    return (
        <div className='containerBar'>
            <div className="titles">
                <h1>Destaques</h1>
                <p>Veja mais</p>
            </div>
            <div className="teste">
                {data.map((item) => {
                    const { name, infos, image } = item;
                    return (
                        <div className="prod_cards">
                            <div className="prods">
                                <img src={ image } alt="" />
                                <h1>{ name }</h1>
                                <p>{ infos }</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ContainerBar;