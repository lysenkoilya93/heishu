import React from "react";
import PageWrapper from "/src/components/layouts/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import teaList from "/src/mocks/teaList";
import teaDrinkingOrder from "/src/mocks/teaDrinkingOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "/src/components/pages/main-page/main-page";
import CatalogPage from "/src/components/pages/catalog-page/catalog-page";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route
              index
              element={
                <MainPage teas={teaList} teaDrinkingOrder={teaDrinkingOrder} />
              }
            />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={
                <CatalogPage
                  teas={teaList}
                  teaDrinkingOrder={teaDrinkingOrder}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
