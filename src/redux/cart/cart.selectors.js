const { createSelector } = require("reselect");

const cartSlice = (state) => state.cart;

export const selectCartItems = createSelector(
  [cartSlice],
  (slice) => slice.items
);

export const selectTotalCartItems = createSelector(
  [cartSlice],
  (slice) => slice.countItems
);

export const selectCartSubtotalPrice = createSelector(
  [cartSlice],
  (slice) => slice.subtotal
);
