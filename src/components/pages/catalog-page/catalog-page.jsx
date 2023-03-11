import React from "react";
import Catalog from "/src/components/blocks/catalog/catalog";
// import About from "/src/components/blocks/about/about";
// import TeasList from "/src/components/blocks/teas-list/teas-list";
// import TeaDrinking from "/src/components/blocks/tea-drinking/tea-drinking";
// import { TitleLevel } from "/src/components/ui/title/title";

function CatalogPage({ teas }) {
  return (
    <>
      <Catalog teas={teas} />
    </>
  );
}

export default CatalogPage;
