import React from "react";

import "./layout.style.scss";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

const Layout = ({ children }) => (
  <div className="app-layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
