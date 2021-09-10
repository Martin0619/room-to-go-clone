import * as t from "./cart.types";

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
          subtotal: state.subtotal + existingItem.price,
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
        subtotal: state.subtotal + itemToAdd.price,
        items: {
          ...items,
          [itemToAdd.sku]: { ...itemToAdd, quantity: 1 },
        },
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
