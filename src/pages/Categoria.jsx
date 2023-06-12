import { useLocation } from "react-router-dom";
import Header from "../components/header/header";
import { useEffect } from "react";
import { useState } from "react";

export function Categoria() {
  const location = useLocation();
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://projeto-integrador3.vercel.app/static/produtos.json').then((Response) => Response.json())
        .then((response) => {
          const dataResponse = []
          response.forEach(produto => {
            if(location.pathname.trim().toLowerCase().includes(produto.type.trim().toLowerCase())) {
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
      <h1>{location.pathname}</h1>
    </div>
  );
}
