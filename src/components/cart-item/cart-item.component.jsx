import React from "react";
import { connect } from "react-redux";

import "./cart-item.style.scss";
import ImageContainer from "../image-container/image-container.component";
import { removeItemFromCart } from "../../redux/cart/cart.actions";

let CartItem = ({ name, quantity, price, imageUrl, sku, removeItem }) => (
  <div className="cart-item">
    <ImageContainer src={imageUrl} alt="" />
    <span className="cart-item-name">{name}</span>
    <span className="cart-item-remove-btn" onClick={() => removeItem(sku)}>
      X
    </span>
    <span className="cart-item-qty">Qty: {quantity}</span>
    <span className="cart-item-price">${price}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (sku) => dispatch(removeItemFromCart(sku)),
});

CartItem = connect(null, mapDispatchToProps)(CartItem);

export default CartItem;
