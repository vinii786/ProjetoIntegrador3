import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../cartButton/CartButton.css';
import { useCarrinho } from '../../context/CarrinhoContext';
import { Link } from "react-router-dom"

function CartButton() {
  const { produtos } = useCarrinho()



  return (
    <Link to="/carrinho" className="cart_button">
      <FaShoppingCart color='#FFF' />
      <span className="cart-name">Meu carrinho </span>
      <span className="cart-status">{produtos?.length}</span>
    </Link>
  );
}

export default CartButton;