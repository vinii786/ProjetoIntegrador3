import { useCarrinho } from "../../context/CarrinhoContext"
import '../Carrinho/Carrinho.css'
import Header from '../../components/header/header'
import Lixeira from '../Carrinho/imgs/lixeira.png'


export function Carrinho() {
  const { produtos, removeProduto } = useCarrinho()

  return (
    <div>
      <Header />
      <h1 className="tittle_">
        Resumo do pedido
      </h1>
      <div className="container_">
      {produtos.map(produto => (
          <div className="content_">
            <div className="content_img">
              <img src={produto.image} alt="" />
            </div>
            <div className="content_text">
              <h2>{produto.name}</h2>
              <p>{produto.price}</p>
            </div>
            <div className="content_button">             
              <button onClick={() => removeProduto(produto.id)} ><img src={ Lixeira } alt="" /></button>
            </div>
          </div>
      ))}
      </div>
    </div>  
  )
}