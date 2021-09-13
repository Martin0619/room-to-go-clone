import React from "react";

import Button from "../button/button.component";

const CartOrderBox = () => (
  <aside className="cart-order-box">
    <span className="cart-order-box__heading">your order</span>
    <span className="cart-order-box__subtotal-text">subtotal</span>
    <span className="cart-order-box__subtotal-price">$2349.98</span>
    <span className="cart-order-box__shipping-text">{`shipping & delivery`}</span>
    <span className="cart-order-box__calc-in-checkout-text">
      (calculated in checkout)
    </span>
    <span className="cart-order-box__total">total</span>
    <span className="cart-order-box__total">$2349.98</span>
    <div className="cart-order-box__btn-call-action-section">
      <Button isCheckout />
      <Button isPaypal />
    </div>
  </aside>
);

export default CartOrderBox;
