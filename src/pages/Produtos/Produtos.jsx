import '../Produtos/Produtos.css'
import { useState } from "react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Header from "../../components/header/header"
import Buybutton from '../../components/buyButton/buyButton'

export function Produto() {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState({})
  const search = searchParams.get("name")

  useEffect(() => {
    fetch('https://projeto-integrador3.vercel.app/static/produtos.json').then((Response) => Response.json())
      .then((response) => {

        let responseData = null

        response.forEach(produto => {
          if (produto.name.trim().toLowerCase() === search.trim().toLowerCase()) {
            responseData = produto
          }
        });

        setData(responseData)
      });
  }, [])

  if (data === null) {
    return (
      <div>
        <p>produto nao encontrado</p>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <div className="kk">
        <div className="containerBar_">
          <div className="img_">
          <h1 className='oies'>{data.name}</h1>
            <img src={data.image} alt="" />
          </div>
          <div className="container_prod_infos">
            <h2>Informações</h2>
            <p>{data.price}</p>
            <div className="infosRemedio">
              <p>{data.infos}</p>
              <Buybutton produto={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}