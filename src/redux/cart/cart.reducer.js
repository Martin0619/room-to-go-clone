import * as t from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  removeOneItemUnit,
} from "./cart.util";

const initialState = {
  items: {},
  subtotal: 0,
  countItems: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.clearCart:
      return initialState;

    case t.addItemToCart:
      return addItemToCart(action.payload, state);

    case t.removeItemFromCart:
      return removeItemFromCart(action.payload, state);

    case t.removeOneItemUnit:
      return removeOneItemUnit(action.payload, state);

    default:
      return state;
  }
};

export default cartReducer;
