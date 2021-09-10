import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectTotalCartItems } from "../../redux/cart/cart.selectors";

import "./cart-icon.style.scss";

let CartIcon = ({ countCartItems }) => (
  <Link className="cart-icon" to="/cart">
    <span>{countCartItems ?? 0}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="28"
      viewBox="0 0 40 40"
      role="presentation"
      aria-hidden="true"
    >
      <path d="M13.8 31.5c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2S18 38 18 35.7c0-2.3-1.9-4.2-4.2-4.2zm0 6.5c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2zM31.4 31.5c-2.3 0-4.2 1.9-4.3 4.2 0 2.3 1.9 4.2 4.2 4.3 2.3 0 4.2-1.9 4.3-4.2 0-2.4-1.9-4.3-4.2-4.3zm0 6.5c-1.2 0-2.2-1-2.3-2.2 0-1.2 1-2.2 2.2-2.3s2.2 1 2.3 2.2c0 1.3-1 2.3-2.2 2.3zM40 7.9v-.1-.1-.1-.1-.1-.1l-.1-.1-.1-.1-.1-.1-.1-.1h-.2H7.2L5.9.8C5.9.3 5.4 0 5 0H1C.4 0 0 .4 0 1s.4 1 1 1h3.1l1.2 5.8v.1c0 .2 0 .3.1.4l2.9 14.4v.2l1.1 5.4c.1.5.5.8 1 .8h25c.6 0 1-.4 1-1s-.4-1-1-1H11.3l-.7-3.5H36.9s.1 0 .1-.1h.1l.1-.1.1-.1.1-.1v-.1l.1-.1v-.1-.1-.1L40 8.1v-.2zm-2.2 1l-2.2 12.7H10.2L7.6 8.9h30.2z" />
    </svg>
  </Link>
);

const mapStateToProps = (state) => ({
  countCartItems: selectTotalCartItems(state),
});

CartIcon = connect(mapStateToProps)(CartIcon);

export default CartIcon;
