import { createSelector } from "reselect";

const livingRoomsCategoriesSlice = (state) => state.livingRoomsCategories;

export const selectLivingRoomsCategories = createSelector(
  [livingRoomsCategoriesSlice],
  (slice) => slice
);
