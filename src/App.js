import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.style.scss";
import Layout from "./components/layout/layout.component";
import LoadingSpinner from "./components/loading-spinner/loading-spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import CartPage from "./pages/cart/cart.page";

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
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route exact path="/room-to-go-clone" component={HomePage} />
          <Route exact path="/room-to-go/furniture" component={FurniturePage} />
          <Route
            exact
            path="/room-to-go-clone/furniture/living-rooms"
            component={LivingRoomsCategoriesPage}
          />
          <Route
            exact
            path="/room-to-go-clone/furniture/living-rooms/sets"
            component={LivingRoomSetsPage}
          />
          <Route
            path="/room-to-go-clone/error"
            render={() => {
              throw Error;
            }}
          />
          <Route path="/room-to-go-clone/cart" component={CartPage} />
          <Route path="*" render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </Layout>
);

export default App;
