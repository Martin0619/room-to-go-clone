import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import topCategoriesReducer from "./top-categories/top-categories.reducers";
import livingRoomsCategoriesReducer from "./living-rooms-categories/living-rooms-categories.reducers";
import livingRoomSetsReducer from "./living-room-sets/living-room-sets.reducers";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    topCategories: topCategoriesReducer,
    livingRoomsCategories: livingRoomsCategoriesReducer,
    livingRoomSets: livingRoomSetsReducer,
    cart: cartReducer,
  })
);

export default rootReducer;
