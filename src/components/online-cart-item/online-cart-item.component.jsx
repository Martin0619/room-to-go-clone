import React from "react";
import { connect } from "react-redux";

import {
  addItemToCart,
  removeOneItemUnit,
} from "../../redux/cart/cart.actions";

let OnlineCartItem = ({ addItem, removeOneItemUnit, ...cartItem }) => (
  <div className="online-cart-item">
    <section>
      <img src={cartItem.imageUrl} alt="" />
    </section>
    <section>
      <h1>{cartItem.name}</h1>
      <span>{cartItem.sku}</span>
    </section>
    <section>
      <span onClick={() => removeOneItemUnit(cartItem.sku)}>-</span>
      <span>{cartItem.quantity}</span>
      <span onClick={() => addItem(cartItem)}>+</span>
    </section>
    <section>${cartItem.price}</section>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
  removeOneItemUnit: (sku) => dispatch(removeOneItemUnit(sku)),
});

OnlineCartItem = connect(null, mapDispatchToProps)(OnlineCartItem);

export default React.memo(OnlineCartItem);
