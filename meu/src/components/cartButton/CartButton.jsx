import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../cartButton/CartButton.css';

function CartButton() {
  return (
    <button type="button" className="cart_button">
      <FaShoppingCart />
      <span className="cart-name">Meu carrinho </span>
      <span className="cart-status"> 1 </span>
    </button>
  );
}

export default CartButton;