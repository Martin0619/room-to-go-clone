import React from "react";
import { connect } from "react-redux";

import { selectLivingRoomSets } from "../../redux/living-room-sets/living-room-sets.selectors";
import Card from "../card/card.component";
import { addItemToCart } from "../../redux/cart/cart.actions";

let LivingRoomSets = ({ products, addItemToCart }) => (
  <section className="collection">
    {Object.keys(products).map((sku) => (
      <Card
        key={sku}
        src={products[sku].imageUrl}
        title={products[sku].name}
        price={products[sku].price}
        onClick={() => addItemToCart(products[sku])}
      />
    ))}
  </section>
);

const mapStateToProps = (state) => ({
  products: selectLivingRoomSets(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

LivingRoomSets = connect(mapStateToProps, mapDispatchToProps)(LivingRoomSets);

export default LivingRoomSets;
