import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import OnlineCartItem from "../online-cart-item/online-cart-item.component";

let OnlineCartItemsCollection = ({ items }) => (
  <section className="online-cart-items-collection">
    {Object.keys(items).map((sku) => (
      <OnlineCartItem key={sku} {...items[sku]} />
    ))}
  </section>
);

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
});

OnlineCartItemsCollection = connect(mapStateToProps)(OnlineCartItemsCollection);

export default OnlineCartItemsCollection;
