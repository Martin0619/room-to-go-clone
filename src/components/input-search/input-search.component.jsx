import React from "react";

import "./input-search.style.scss";
import SearchButton from "../search-button/search-button.component";

const InputSearch = () => (
  <div className="input-search">
    <input type="search" placeholder="Search" />
    <SearchButton type="submit" />
  </div>
);

export default InputSearch;
