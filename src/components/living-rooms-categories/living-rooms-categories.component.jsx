import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectLivingRoomsCategories } from "../../redux/living-rooms-categories/living-rooms-categories.selectors";

import Card from "../card/card.component";

let LivingRoomsCategories = ({ categories }) => (
  <div className="collection">
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
  categories: selectLivingRoomsCategories(state),
});

LivingRoomsCategories = connect(mapStateToProps)(LivingRoomsCategories);

export default LivingRoomsCategories;
