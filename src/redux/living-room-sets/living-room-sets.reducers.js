import * as t from "./living-room-sets.types";

const initialState = {
  "1025026P": {
    sku: "1025026P",
    name: "Kingvale Court Red 2 Pc Living Room with Reclining Sofa",
    price: 2349.99,
    imageUrl:
      "https://assets.roomstogo.com/kingvale-court-red-2-pc-living-room-with-reclining-sofa_1025026P_image-room?cache-id=b1e7c1f8e81babef322bac31b5442650&h=385",
  },
  "1549271P": {
    sku: "1549271P",
    name: "Hudson Heights White 2 Pc Sectional",
    price: 1299.99,
    imageUrl:
      "https://assets.roomstogo.com/hudson-heights-white-2-pc-sectional_1549271P_image-room?cache-id=ef6e06fc3c74b121f98ae9fd3a0df661&h=385",
  },
  "1599121P": {
    sku: "1599121P",
    name: "Cindy Crawford Home Monterey Park Off-White 2 Pc Sectional",
    price: 1799.99,
    imageUrl:
      "https://assets.roomstogo.com/cindy-crawford-home-monterey-park-off-white-2-pc-sectional_1599121P_image-room?cache-id=c8195a2d8d653ebdd7c406c1c865c8d3&h=385",
  },
  "1308934P": {
    sku: "1308934P",
    name: "Eric Church Highway To Home Headliner Gray Leather 2 Pc Living Room with Reclining Sofa",
    price: 2299.98,
    imageUrl:
      "https://assets.roomstogo.com/eric-church-highway-to-home-headliner-gray-leather-2-pc-living-room_1308934P_image-room?cache-id=73749d1f950047a2bffe52ed8b61503c&h=385",
  },
  "1046071P": {
    sku: "1046071P",
    name: "Blossom Fields Beige 2 Pc Living Room",
    price: 1179.98,
    imageUrl:
      "https://assets.roomstogo.com/blossom-fields-beige-2-pc-living-room_1046071P_image-room?cache-id=f006f542b4285ceef22100ce449eda9c&h=385",
  },
  "1366496P": {
    sku: "1366496P",
    name: "Cindy Crawford Home Beachside Walk Blue Denim 5 Pc Living Room",
    price: 2639.98,
    imageUrl:
      "https://assets.roomstogo.com/cindy-crawford-home-beachside-walk-blue-denim-5-pc-living-room_1366496P_image-room?cache-id=8a5a3f7e22d21b6cddc54df057fb8cf5&h=385",
  },
  "1263798P": {
    sku: "1263798P",
    name: "Cindy Crawford Home Calvano Brown Leather 3 Pc Living Room",
    price: 3299.99,
    imageUrl:
      "https://assets.roomstogo.com/cindy-crawford-home-calvano-brown-leather-3-pc-living-room_1263798P_image-room?cache-id=b819af94f3bc5391cab031039b352d77&h=385",
  },
  "1254151P": {
    sku: "1254151P",
    name: "Sofia Vergara Via Sorrento Navy 4 Pc Sectional",
    price: 2499.99,
    imageUrl:
      "https://assets.roomstogo.com/sofia-vergara-via-sorrento-navy-4-pc-sectional_1254151P_image-room?cache-id=c2508d3a723193e0250e493c1c880747&h=385",
  },
  "1022046P": {
    sku: "1022046P",
    name: "Warrendale Beige 3 Pc Power Reclining Sectional",
    price: 2399.99,
    imageUrl:
      "https://assets.roomstogo.com/warrendale-beige-3-pc-power-reclining-sectional_1022046P_image-room?cache-id=9c261ef60168b9590e8931be7ffb6667&h=385",
  },
};

const livingRoomSetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.getLivingRoomSets:
      return { ...state };

    default:
      return state;
  }
};

export default livingRoomSetsReducer;
