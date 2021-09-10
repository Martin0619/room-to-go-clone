import React from "react";
import HeaderBottom from "../header-bottom/header-bottom.component";
import HeaderTop from "../header-top/header-top.component";

import "./header.style.scss";

const Header = () => (
  <header className="header">
    <HeaderTop />
    <HeaderBottom />
  </header>
);

export default Header;
