import React from "react";
import { NavLink } from "react-router-dom";

import "./header-bottom.style.scss";

const HeaderBottom = () => (
  <section className="header-bottom">
    <ul className="nav-menu">
      <li className="nav-item">
        <NavLink className="nav-link" to="/room-to-go-clone/furniture">
          furniture
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to={`/room-to-go-clone/furniture/kids-and-teens`}
        >
          {"kids & teens"}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/room-to-go-clone/furniture/outdoor-patio"
        >
          patio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/room-to-go-clone/mattresses">
          mattresses
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/room-to-go-clone/sales">
          sales
        </NavLink>
      </li>
    </ul>
  </section>
);

export default HeaderBottom;
