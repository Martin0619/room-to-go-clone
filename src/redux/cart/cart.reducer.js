import * as t from "./cart.types";
import { round } from "./cart.util";

const initialState = {
  items: {},
  hidden: true,
  subtotal: 0,
  countItems: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.clearCart:
      return initialState;

    case t.addItemToCart: {
      const itemToAdd = action.payload;
      const { items } = state;
      const existingItem = items[itemToAdd.sku];

      if (existingItem) {
        return {
          ...state,
          countItems: state.countItems + 1,
          subtotal: round(state.subtotal + existingItem.price),
          items: {
            ...items,
            [existingItem.sku]: {
              ...existingItem,
              quantity: existingItem.quantity + 1,
            },
          },
        };
      }

      return {
        ...state,
        countItems: state.countItems + 1,
        subtotal: round(state.subtotal + itemToAdd.price),
        items: {
          ...items,
          [itemToAdd.sku]: { ...itemToAdd, quantity: 1 },
        },
      };
    }

    case t.removeItemFromCart: {
      const sku = action.payload;

      if (!state.items[sku]) return state;

      const oldItem = state.items[sku];
      delete state.items[sku];

      return {
        ...state,
        subtotal: round(
          state.subtotal - oldItem.price * (oldItem.quantity ?? 0)
        ),
        countItems: state.countItems - oldItem.quantity,
        items: { ...state.items },
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
