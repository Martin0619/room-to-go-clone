import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";

let OnlineCartItemsCollection = () => (
  <section className="online-cart-items-collection"></section>
);

const mapStateToProps = (state) => ({
  items: selectCartItems(state),
});

OnlineCartItemsCollection = connect(mapStateToProps)(OnlineCartItemsCollection);

export default OnlineCartItemsCollection;
