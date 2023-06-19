import { useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Carrinho/Carrinho.css"


export function Categoria() {
  const location = useLocation();
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://projeto-integrador3.vercel.app/static/produtos.json').then((Response) => Response.json())
      .then((response) => {
        const dataResponse = []
        response.forEach(produto => {
          if (location.pathname.trim().toLowerCase().includes(produto.type.trim().toLowerCase())) {
            dataResponse.push(produto)
          }
        });

        console.log(dataResponse)
        setData(dataResponse)
      });
  }, [])
  return (
    <div>
      <Header />
      <h1 className="tittle_">
        Produtos
      </h1>
      <div className="container_">
        {data.map((produto) => (
          <Link to={`/produto?name=${produto.name}`} className='links' >
          <div className="content_">
          <div className="content_img">
            <img src={produto.image} alt="" />
          </div>
          <div className="content_text">
            <h2>{produto.name}</h2>
            <p>{produto.price}</p>
          </div>
        </div>
        </Link>
        ))}
      </div>
    </div>
  );
}
