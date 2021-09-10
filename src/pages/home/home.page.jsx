import React from "react";

import "./home.style.scss";
import ImageContainer from "../../components/image-container/image-container.component";
import TopCategories from "../../components/top-categories-collection/top-categories-collection.component";
import MainContentLayout from "../../components/main-content-layout/main-content-layout.component";

const HomePage = () => {
  return (
    <MainContentLayout className="home-page">
      <ImageContainer
        src="https://assets.roomstogo.com/TT4_R1_CindyColors_HERO_CONTAINER_CN_1660x400.png?cache-id=a68cccdf98226e95ec45578a984fd773&f=webp"
        alt="Colash of Cindy Crawford colors collection"
      />
      <TopCategories />
    </MainContentLayout>
  );
};

export default HomePage;
