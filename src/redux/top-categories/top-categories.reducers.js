import * as t from "./top-categories.types";

const initialState = {
  livingRooms: {
    id: "living-rooms",
    name: "Living Rooms",
    path: "furniture/living-rooms",
    imageUrl:
      "https://assets.roomstogo.com/LR_category_tile_515x349.png?cache-id=f8f0e9876aae5168b494a44b5184839c&f=webp",
  },
  diningRooms: {
    id: "dining-rooms",
    name: "Dining Rooms",
    path: "furniture/dining-rooms",
    imageUrl:
      "https://assets.roomstogo.com/dining_rooms_-_twin_lakes_-_collection_tile.jpg?cache-id=cbf59f4fb5a4dcff46bd6bd3dda216df&f=webp",
  },
  bedRooms: {
    id: "bed-rooms",
    name: "Bed Rooms",
    path: "furniture/bed-rooms",
    imageUrl:
      "https://assets.roomstogo.com/bedrooms_tile_KS_515x349.jpg?cache-id=61df5ed6ee678b00f4183862b27466b7&f=webp",
  },
  kidsTeens: {
    id: "kids-teens",
    name: "Kids & Teens",
    path: "furniture/kids-and-teens",
    imageUrl:
      "https://assets.roomstogo.com/Kids_and_Teens_-_cottage_colors_-_collection_tile.png?cache-id=7382aa55f3e0fd6a9c86d345e4c2b285&f=webp",
  },
  patio: {
    id: "patio",
    name: "Patio",
    path: "furniture/outdoor-patio",
    imageUrl:
      "https://assets.roomstogo.com/catalina_category_515x349.png?cache-id=9ce0d5067ca86a3586106d9e31ecb741&f=webp",
  },
  mattresses: {
    id: "mattress",
    name: "Mattress",
    path: "mattress",
    imageUrl:
      "https://assets.roomstogo.com/king_mattress_room-grid.jpg?cache-id=d6670d9e8bc9fc37c74c94fc69b42fb4&f=webp",
  },
};

const topCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.getTopCategories:
      return { ...state };

    default:
      return state;
  }
};

export default topCategoriesReducer;
