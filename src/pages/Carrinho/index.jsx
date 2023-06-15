import { useCarrinho } from "../../context/CarrinhoContext"
import '../Carrinho/Carrinho.css'
import Header from '../../components/header/header'

export function Carrinho() {
  const { produtos, removeProduto } = useCarrinho()

  return (
    <div>
      <Header />
      <h1 className="tittle_">
        Resumo do pedido
      </h1>
      {produtos.map(produto => (
        <div className="">
          <img src={produto.image} alt="" />
          <h2>{produto.name}</h2>
          <p>{produto.price}</p>
          <button onClick={() => removeProduto(produto.id)} >Tirar produto</button>
        </div>
      ))}
    </div>  
  )
}