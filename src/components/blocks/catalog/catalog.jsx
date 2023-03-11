import React from "react";
// import { Image } from "/src/elements";
// import Title from "/src/title/title";
// import FullPrice from "/src/full-price/full-price";
import { List, ListItem, Image } from "./styles";
import TeaCard from "/src/components/ui/tea-card/tea-card";

export default function Catalog({ teas }) {
  return (
    <>
      <h1>Каталог</h1>
      <List>
        {teas &&
          teas.length &&
          teas.map((tea) => (
            <ListItem key={tea.id}>
              {/*<TeaCard {...tea} />*/}
              {/* <Image src={tea.images[0]} />
              <h2>{tea.name}</h2>
              <span>
                <FullPrice oldPrice={tea.oldPrice} price={tea.price} />
              </span> */}
              <Image src={tea.image} />
              <h2>{tea.name}</h2>
              <h3>{tea.price} ₽</h3>
            </ListItem>
          ))}
      </List>
    </>
  );
}
