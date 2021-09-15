import React from "react";

import "./cart.style.scss";
import CartOrderBox from "../../components/cart-order-box/cart-order-box.component";
import OnlineCartItemsCollection from "../../components/online-cart-items-collection/online-cart-items-collection.component";

const CartPage = () => (
  <section className="cart-page">
    <span className="online-cart-heading">online cart</span>
    <OnlineCartItemsCollection />
    <CartOrderBox />
  </section>
);

export default CartPage;
