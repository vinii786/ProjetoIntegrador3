import { useCarrinho } from "../context/CarrinhoContext"

export function Carrinho() {
  const { produtos, removeProduto } = useCarrinho()
  
  return (
    <div>
      {produtos.map(produto => (
        <div>
          <h2>{produto.name}</h2>
          <p>{produto.price}</p>
          <button onClick={() => removeProduto(produto.id)} >Tirar produto</button>
        </div>
      ))}
    </div>
  )
}