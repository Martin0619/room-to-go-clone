import React from "react";
import { connect } from "react-redux";

import "./cart-modal.style.scss";
import { selectCartSubtotalPrice } from "../../redux/cart/cart.selectors";
import CartItemsCollection from "../cart-items-collection/cart-items-collection.component";

let CartModal = ({ subtotal }) => (
  <aside className="cart-modal">
    <span>${subtotal}</span>
    <CartItemsCollection />
  </aside>
);

const mapStateToProps = (state) => ({
  subtotal: selectCartSubtotalPrice(state),
});

CartModal = connect(mapStateToProps)(CartModal);

export default CartModal;
