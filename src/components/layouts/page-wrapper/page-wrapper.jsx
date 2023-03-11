import React from "react";
import Header from "/src/components/layouts/header/header";
import Footer from "/src/components/layouts/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import CatalogPage from "/src/components/pages/catalog-page/catalog-page";
import { Main } from "./styles";
import { Outlet } from "react-router-dom";
// import "./style.css";

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
