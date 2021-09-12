import React from "react";
import { connect } from "react-redux";

import "./cart-modal.style.scss";
import Button from "../button/button.component";
import {
  selectCartSubtotalPrice,
  selectTotalCartItems,
} from "../../redux/cart/cart.selectors";
import CartItemsCollection from "../cart-items-collection/cart-items-collection.component";
import { withRouter } from "react-router";

let CartModal = ({ subtotal, totalCartItems, history }) => {
  console.log(totalCartItems);
  const onClickHandler = (e) => {
    if (totalCartItems === 0) {
      e.preventDefault();
    } else {
      history.push("/room-to-go-clone/checkout");
    }
  };

  return (
    <aside className="cart-modal">
      <span className="cart-modal-subtotal">subtotal: ${subtotal}</span>
      <Button
        text="Checkout"
        className={`cart-modal-button ${
          totalCartItems === 0 && "cart-modal-button-disabled"
        }`}
        onClick={onClickHandler}
      />
      {totalCartItems === 0 ? (
        <span className="cart-modal-empty">Empty</span>
      ) : (
        <CartItemsCollection />
      )}
    </aside>
  );
};

const mapStateToProps = (state) => ({
  subtotal: selectCartSubtotalPrice(state),
  totalCartItems: selectTotalCartItems(state),
});

CartModal = connect(mapStateToProps)(CartModal);
CartModal = withRouter(CartModal);

export default CartModal;
