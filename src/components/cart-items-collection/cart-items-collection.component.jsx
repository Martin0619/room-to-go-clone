import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";

let CartItemsCollection = ({ items }) => (
  <div className="cart-items-collection">
    {Object.keys(items).map((key) => (
      <CartItem key={key} {...items[key]} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
});

CartItemsCollection = connect(mapStateToProps)(CartItemsCollection);

export default CartItemsCollection;
