import React from "react";

import ImageContainer from "../../components/image-container/image-container.component";
import LivingRoomsCategories from "../../components/living-rooms-categories/living-rooms-categories.component";
import MainContentLayout from "../../components/main-content-layout/main-content-layout.component";

const LivingRoomsCategoriesPage = () => (
  <MainContentLayout>
    <ImageContainer
      src="https://assets.roomstogo.com/TT3_R1_LR_CATEGORY_CN_1660x224.png?cache-id=267d04e4297adac836b6d8583c0720c2&f=webp"
      alt=""
    />
    <LivingRoomsCategories />
  </MainContentLayout>
);

export default LivingRoomsCategoriesPage;
