import React from "react";

import "./header-top.style.scss";
import Logo from "../logo/logo.component";
import CartIcon from "../cart-icon/cart-icon.component";
import InputSearch from "../input-search/input-search.component";

const HeaderTop = () => (
  <section className="header-top">
    <form>
      <InputSearch />
    </form>
    <Logo className="header-logo" />
    <CartIcon />
  </section>
);

export default HeaderTop;
