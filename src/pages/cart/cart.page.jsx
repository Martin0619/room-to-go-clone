import React from "react";

import "./cart.style.scss";

const CartPage = () => (
  <section className="cart-page">
    <span className="online-cart-heading">online cart</span>
    <div className="online-cart-items-collection">cart items</div>
    <aside className="online-cart-order-description">your order</aside>
  </section>
);

export default CartPage;
