/**
 * @typedef {object} CartItem
 * @property {string} sku
 * @property {string} name
 * @property {number} price
 * @property {string} imageUrl
 * @property {number} quantity
 */

/**
 * @typedef {object} CartSlice
 * @property {{[sku: string]: CartItem}} items
 * @property {number} subtotal
 * @property {number} countItems
 */

/**
 * Rounds a number to N decimal places
 * @param {number} number The number to round
 * @param {number} precision The decimal places
 * @returns {number}
 */
export const round = (number, precision = 2) =>
  Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);

/**
 *
 * @param {CartItem} item
 * @param {CartSlice} state
 * @returns {CartSlice}
 */
export const addItemToCart = (item, state) => {
  const existingItem = state.items[item.sku];
  // add a new item to the cart
  if (!existingItem) {
    item.quantity = 1;
    return {
      ...state,
      countItems: state.countItems + 1,
      subtotal: round(state.subtotal + item.price),
      items: {
        ...state.items,
        [item.sku]: { ...item },
      },
    };
  }

  // update item quantity & cart subtotal
  return {
    ...state,
    countItems: state.countItems + 1,
    subtotal: round(state.subtotal + item.price),
    items: {
      ...state.items,
      [item.sku]: { ...existingItem, quantity: existingItem.quantity + 1 },
    },
  };
};

/**
 * Removes an item from the cart slice (piece of state)
 * @param {string} sku The sku of the item to be removed
 * @param {CartSlice} state The cart slice
 * @returns {CartSlice} Returns a new cart slice
 */
export const removeItemFromCart = (sku, state) => {
  if (!state.items[sku]) return state;
  const oldItem = state.items[sku];
  delete state.items[sku];
  return {
    ...state,
    countItems: state.countItems - oldItem.quantity,
    subtotal: round(state.subtotal - oldItem.quantity * oldItem.price),
    items: { ...state.items },
  };
};

/**
 * Decrease the quantity of the item by 1. If the item quantity is 1, the item is removed from the state
 * @param {string} sku The sku of the item to be removed
 * @param {CartSlice} state The cart slice
 * @returns {CartSlice} Returns a new cart slice
 */
export const removeOneItemUnit = (sku, state) => {
  const item = state.items[sku];
  if (!item) return state;

  if (item && item.quantity === 1) {
    // elimate the item from the cart
    delete state.items[sku];
    return {
      ...state,
      countItems: state.countItems - 1,
      subtotal: round(state.subtotal - item.price),
      items: { ...state.items },
    };
  }

  // take one from item quantity
  return {
    ...state,
    countItems: state.countItems - 1,
    subtotal: round(state.subtotal - item.price),
    items: {
      ...state.items,
      [sku]: { ...item, quantity: item.quantity - 1 },
    },
  };
};
