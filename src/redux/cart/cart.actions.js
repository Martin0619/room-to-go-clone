import * as t from "./cart.types";

export const addItemToCart = (item) => ({
  type: t.addItemToCart,
  payload: item,
});

export const clearCart = () => ({ type: t.clearCart });

export const removeItemFromCart = () => ({ type: t.removeItemFromCart });

export const removeOneItemUnit = (sku) => ({
  type: t.removeOneItemUnit,
  payload: sku,
});
