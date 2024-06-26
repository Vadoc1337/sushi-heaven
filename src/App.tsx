import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layots/MainLayout";

import "./scss/app.scss";

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ "./pages/Cart"),
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound"),
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <React.Suspense
              fallback={<div className="container">Loading...</div>}
            >
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense
              fallback={<div className="container">Loading...</div>}
            >
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
      <Route path="*" element={<MainLayout />}>
        <Route
          path="*"
          element={
            <React.Suspense
              fallback={<div className="container">Loading...</div>}
            >
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
