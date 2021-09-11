import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.style.scss";
import Layout from "./components/layout/layout.component";
import LoadingSpinner from "./components/loading-spinner/loading-spinner.component";

const HomePage = lazy(() => import("./pages/home/home.page"));
const FurniturePage = lazy(() => import("./pages/furniture/furniture.page"));
const LivingRoomsCategoriesPage = lazy(() =>
  import("./pages/living-rooms-categories/living-rooms-categories.page")
);
const LivingRoomSetsPage = lazy(() =>
  import("./pages/living-room-sets/living-room-sets.page")
);

const App = () => (
  <Layout>
    <Suspense fallback={<LoadingSpinner />}>
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
    </Suspense>
  </Layout>
);

export default App;
