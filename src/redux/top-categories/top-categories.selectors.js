import { createSelector } from "reselect";

const topCategoriesSlice = (state) => state.topCategories;

export const selectTopCategories = createSelector(
  [topCategoriesSlice],
  (slice) => slice
);
