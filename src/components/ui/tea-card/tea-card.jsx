import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  Text,
  Figure,
  Image,
  Cost,
  StyledTeaCard,
  StyledCardIcon
} from "./styles";
// import "./style.css";

function TeaCard({
  name, // название чая
  about, // информация о чае
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image, // url c фото чая
  price // цена чая
}) {
  return (
    <StyledTeaCard>
      <Figure>
        <Image src={image} width={320} height={320} alt="изображение чая" />
        <StyledCardIcon>{feature}</StyledCardIcon>
      </Figure>
      <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
        {name}
      </Title>
      <Cost>{price} ₽</Cost>
      <Text
        className="tea-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </StyledTeaCard>
  );
}

export default TeaCard;
