/* eslint-disable react-hooks/rules-of-hooks */
import { useCarrinho } from '../../context/CarrinhoContext';
import '../buyButton/buyButton.css'

function buyButton(props){

    const { addProduto } = useCarrinho()

    return(
        <div className='buyButton'>
            <button className={ `btn ${ props.colorButton? 'colorButton':"" }` } onClick={() => {
                addProduto(props.produto)
            }} >Adicionar ao carrinho</button>
        </div>
    )
}
export default buyButton;