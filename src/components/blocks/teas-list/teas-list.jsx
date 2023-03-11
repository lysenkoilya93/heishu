import React from "react";
import Slider from "/src/components/ui/slider/slider";
import Title from "/src/components/ui/title/title";
import TeaCard from "/src/components/ui/tea-card/tea-card";
import Button from "/src/components/ui/button/button";
// import "./style.css";
import { TeaItem, TeaList, StyledTeasList } from "./styles";
import { AppRoute } from "/src/const";

function TeasList({ teas, level }) {
  return (
    <StyledTeasList>
      {teas?.length ? (
        <>
          {/* <Title level={level}>Шу-пуэры</Title> */}
          <Slider teas={teas}>
            {/* {teas.map((tea) => (
              <TeaItem key={tea.id}>
                <TeaCard {...tea} />
              </TeaItem>
            ))} */}
          </Slider>
          <Button
            minWidth={353}
            link={AppRoute.BUY}
            backgroundColor="indianred"
          >
            Выбрать чай
          </Button>
        </>
      ) : null}
    </StyledTeasList>
  );
}

export default TeasList;
