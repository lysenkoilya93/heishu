import React from "react";
import About from "/src/components/blocks/about/about";
import TeasList from "/src/components/blocks/teas-list/teas-list";
import TeaDrinking from "/src/components/blocks/tea-drinking/tea-drinking";
import { TitleLevel } from "/src/components/ui/title/title";

function MainPage({ teas, teaDrinkingOrder }) {
  return (
    <>
      <About level={TitleLevel.H1} />
      <TeasList teas={teas} level={TitleLevel.H2} />
      <TeaDrinking teaDrinkingOrder={teaDrinkingOrder} />
    </>
  );
}

export default MainPage;
