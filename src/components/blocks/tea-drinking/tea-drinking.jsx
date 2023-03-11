import React, { useState } from "react";
import { Form, Label, Li, Ul } from "/src/components/styled";
import Button from "/src/components/ui/button/button";
import { TitleSize } from "/src/components/ui/title/title";
import RadioButton from "/src/components/ui/radio-button/radio-button";
import { Accordion } from "/src/components/ui/accordion/accordion";
import {
  StyledSection,
  Price,
  AccordionText,
  RadioLabelForTime,
  FormItem,
  StyleTitle,
  RadioLabelForType
} from "./styles";

// страница покупки
function TeaDrinking({
  // деструктурируем buyOptions
  teaDrinkingOrder: { peoplesOptions = [], drinkingOptions = [] }
}) {
  const canOrder = peoplesOptions.length && drinkingOptions.length;
  const [peoples, setPeoples] = useState(peoplesOptions[0]);
  const [selectType, setSelectType] = useState(drinkingOptions[0].id);

  const type = drinkingOptions.find((option) => option.id === selectType);
  const price = peoples * (type ? type.price : 0);

  // преобразуем ticketOptions в данные для акардеона
  const accordionContent =
    canOrder &&
    drinkingOptions.map((option) => ({
      id: option.id,
      title: (
        <RadioButton
          labelComponent={RadioLabelForType}
          selectValue={selectType}
          value={option.id}
          text={option.title}
          onChange={(el) => {
            setSelectType(Number(el.target.value));
          }}
        />
      ),
      description: option.description
    }));

  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
              Вы выбрали следующее чаепитие: ${type.title}.
              Количество участников: ${peoples}.
              Цена билета: ${price} руб.`
    );
  };

  return (
    <StyledSection>
      <StyleTitle level={1} size={TitleSize.BIG}>
        Заказать чаепитие
      </StyleTitle>
      {canOrder ? (
        <Form $width={540}>
          <FormItem>
            <Label $margin={12}>Количество участников</Label>
            <Ul $isGridList $indent={12} $align="left">
              {peoplesOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={peoples}
                    value={option}
                    text={option}
                    onChange={(el) => {
                      setPeoples(Number(el.target.value));
                    }}
                  />
                </Li>
              ))}
            </Ul>
          </FormItem>
          <FormItem $bottom={22}>
            <Label $margin={12}>Варианты чаепития</Label>
            <Accordion
              textComponent={AccordionText}
              content={accordionContent}
              isHtml
            />
          </FormItem>
          <Label $small $margin={6}>
            Цена
          </Label>
          <Price>{price} руб.</Price>
          <Button
            minWidth={460}
            backgroundColor={"indianred"}
            onClick={handleBuy}
          >
            Заказать чаепитие
          </Button>
        </Form>
      ) : (
        <p>Заказ чаепитий временно недоступен</p>
      )}
    </StyledSection>
  );
}

export default TeaDrinking;
