import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./top-categories-collection.style.scss";
import Card from "../card/card.component";
import { selectTopCategories } from "../../redux/top-categories/top-categories.selectors";

let TopCategories = ({ topCategories: categories }) => (
  <div className="collection top-categories-collection">
    {Object.keys(categories).map((key) => (
      <Link key={categories[key].id} to={`/${categories[key].path}`}>
        <Card
          preview
          src={categories[key].imageUrl}
          title={categories[key].name}
        />
      </Link>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  topCategories: selectTopCategories(state),
});

TopCategories = connect(mapStateToProps)(TopCategories);
export default TopCategories;
