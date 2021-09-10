import React from "react";

import ImageContainer from "../../components/image-container/image-container.component";
import MainContentLayout from "../../components/main-content-layout/main-content-layout.component";

const FurniturePage = () => (
  <MainContentLayout>
    <ImageContainer
      src="https://assets.roomstogo.com/TT4_R1_FURNITURE_BrandCategory_CN_1660x360.png?cache-id=0b8b192bb2d3260a12cf1c331e609f4c&f=webp"
      alt=""
    />
    <h1>More Furniture Categories</h1>
  </MainContentLayout>
);

export default FurniturePage;
