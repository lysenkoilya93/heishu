import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Address, Text, StyledSection, WorkTime, TextWrapper } from "./styles";

function About() {
  return (
    <StyledSection>
      <TextWrapper>
        <Title size={TitleSize.BIG} level={TitleLevel.H1}>
          Каталог шу-пуэров и хэйчи
        </Title>
        <Text>Крупнейший каталог шу и хэйчи в России</Text>
        <WorkTime>Принимаем и обрабатываем заказы круглосуточно</WorkTime>
        <Address>Какой-то город, какой-то дом</Address>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
