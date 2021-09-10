import { createSelector } from "reselect";

const livingRoomSetsSlice = (state) => state.livingRoomSets;

export const selectLivingRoomSets = createSelector(
  [livingRoomSetsSlice],
  (slice) => slice
);
