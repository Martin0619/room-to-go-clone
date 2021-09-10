import React from "react";
import { NavLink } from "react-router-dom";

import "./header-bottom.style.scss";

const HeaderBottom = () => (
  <section className="header-bottom">
    <ul className="nav-menu">
      <li className="nav-item">
        <NavLink className="nav-link" to="/furniture">
          furniture
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={`/furniture/kids-and-teens`}>
          {"kids & teens"}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/furniture/outdoor-patio">
          patio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/mattresses">
          mattresses
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/sales">
          sales
        </NavLink>
      </li>
    </ul>
  </section>
);

export default HeaderBottom;
