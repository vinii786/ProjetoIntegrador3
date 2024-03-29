import { useCarrinho } from "../../context/CarrinhoContext"
import '../Carrinho/Carrinho.css'
import Header from '../../components/header/header'
import Lixeira from '../Carrinho/imgs/lixeira.png'
import Whatsapp from "../Carrinho/imgs/whatsapp.png"


export function Carrinho() {
  const { produtos, removeProduto } = useCarrinho()

  const total = produtos.reduce((acc, produto) => {
    return acc + parseFloat(produto.price.split("R$")[1])
  }, 0)

  function handleFinalizarCompra() {
    let mensagem = `Olá, gostaria de fazer o pedido:%0A`
    let total = 0
    produtos.forEach(produto => {
      mensagem += `\n ${produto.name}: ${produto.price},%0A`
      total += parseFloat(produto.price.split("R$")[1])
    })

    mensagem += `\n %0ATotal: ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}`

    window.open(`https://wa.me/5534999568736?text=${mensagem}`, '_target')
  }

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
              <button onClick={() => removeProduto(produto.id)} ><img src={Lixeira} alt="" /></button>
            </div>
          </div>
        ))}
        <div className="totalPrice">
          <h3>Total: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</h3>
        </div>
        <div className="btnBuy">
          <button
            className="btn_Finalizar_Compra" onClick={handleFinalizarCompra}>
            <img src={Whatsapp} alt="" />
            Finalizar compra via Whatsapp
          </button>
        </div>
      </div>
    </div>
  )
}