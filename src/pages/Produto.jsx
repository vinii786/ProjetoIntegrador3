import { useState } from "react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export function Produto() {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState({})
  
  const search = searchParams.get("name")
  
  useEffect(() => {
    fetch('http://localhost:3000/static/produtos.json').then((Response) => Response.json())
        .then((response) => {

          let responseData = null

          response.forEach(produto => {
            if(produto.name.trim().toLowerCase() === search.trim().toLowerCase()) {
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
  
  return <div>
    <h1>{data.name}</h1>
    <p>{data.price}</p>
  </div>
}