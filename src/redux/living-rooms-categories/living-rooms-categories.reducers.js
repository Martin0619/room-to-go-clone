import * as t from "./living-rooms-categories.types";

const initialState = {
  livingRoomSets: {
    id: "living-room-sets",
    name: "Living Room Sets",
    path: "furniture/living-rooms/sets",
    imageUrl:
      "https://assets.roomstogo.com/LivingRoom_Sets_FL_CollectionTIle_EP.png?cache-id=376368ae5acb214f5750c03af32c8d78&f=webp",
  },
  sectionalLivingRooms: {
    id: "sectional-living-rooms",
    name: "Sectional Living Rooms",
    path: "furniture/living-rooms/sets/style/sectional",
    imageUrl:
      "https://assets.roomstogo.com/SectionalLiving_Rooms_FL_CollectionTile_EP.png?cache-id=3156f3a338b454baa0b1382a0e8c6950&f=webp",
  },
  leatherLivingRooms: {
    id: "leather-living-rooms",
    name: "Leather Living Rooms",
    path: "furniture/living-rooms/sets/material/leader",
    imageUrl:
      "https://assets.roomstogo.com/Leather_LivingRoom_FL_CollectionTIle_EP.png?cache-id=58735b9c69406b71fae0963cc44ea461&f=webp",
  },
  upholsteredLivingRooms: {
    id: "upholstered-living-rooms",
    name: "Upholstered Living Rooms",
    path: "furniture/living-rooms/sets/upholstered",
    imageUrl:
      "https://assets.roomstogo.com/UpholsteredLiving_Room_FL_CollectionTile_EP.png?cache-id=ed22ede95b453bfca8e5425d7dea0ade&f=webp",
  },
  recliningLivingRooms: {
    id: "reclining-living-rooms",
    name: "Reclining Living Rooms",
    path: "furniture/living-rooms-reclining",
    imageUrl:
      "https://assets.roomstogo.com/RecliningLiving_Room_FL_CollectionTIle_EP.png?cache-id=c8ed4c327cf659d6dae310b1b6890644&f=webp",
  },
  outdoorSeatingSets: {
    id: "outdoor-seating-sets",
    name: "Outdoor Seating Sets",
    path: "furniture/outdoor-patio/seating/sets",
    imageUrl:
      "https://assets.roomstogo.com/patio_seating_room-grid.jpg?cache-id=3110311721fbf6236ce967f08b5786cb&f=webp",
  },
};

const livingRoomsCategoriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case t.getLivingRoomsCategories:
      return { ...state };

    default:
      return state;
  }
};

export default livingRoomsCategoriesReducers;
