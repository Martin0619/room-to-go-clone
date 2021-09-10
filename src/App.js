import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.style.scss";
import HomePage from "./pages/home/home.page";
import FurniturePage from "./pages/furniture/furniture.page";
import Layout from "./components/layout/layout.component";
import LivingRoomsCategoriesPage from "./pages/living-rooms-categories/living-rooms-categories.page";
import LivingRoomSetsPage from "./pages/living-room-sets/living-room-sets.page";

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/furniture" component={FurniturePage} />
      <Route
        exact
        path="/furniture/living-rooms"
        component={LivingRoomsCategoriesPage}
      />
      <Route
        exact
        path="/furniture/living-rooms/sets"
        component={LivingRoomSetsPage}
      />
      <Route path="*" render={() => <h1>Page Not Found</h1>} />
    </Switch>
  </Layout>
);

export default App;
