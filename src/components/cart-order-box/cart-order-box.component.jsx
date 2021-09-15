import React from "react";

import "./cart-order-box.style.scss";
import Button from "../button/button.component";

const CartOrderBox = () => (
  <aside className="cart-order-box">
    <span className="cart-order-box__heading">your order</span>
    <span className="cart-order-box__subtotal-text">subtotal</span>
    <span className="cart-order-box__subtotal">$2349.98</span>
    <span className="cart-order-box__shipping-text">{`shipping & delivery`}</span>
    <span className="cart-order-box__calc-in-checkout-text">
      (calculated in checkout)
    </span>
    <div className="cart-order-box__total">
      <span>total</span>
      <span>$2349.98</span>
    </div>
    <Button className="cart-order-box__checkout-btn" text="checkout now" />
  </aside>
);

export default CartOrderBox;
