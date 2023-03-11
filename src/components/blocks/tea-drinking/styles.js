import styled, { css } from "styled-components";
import { Section } from "/src/components/styled";
import Title from "/src/components/ui/title/title";

export const StyledSection = styled(Section)`
  display: block;
  padding-bottom: 100px;
  background-color: ${(props) => props.theme.colorForListBackground};
  min-height: 786px;
`;

export const StyleTitle = styled(Title)`
  margin-bottom: 24px;
`;

export const FormItem = styled.div`
  margin-bottom: ${(props) => `${props.$bottom || 24}px`};
`;

export const RadioLabelForTime = styled.span`
  display: flex;
  height: 44px;
  width: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;
  ${(props) =>
    props.$isChecked
      ? css`
          background-color: ${props.theme.colorForButton};
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.colorGray};
          color: ${props.theme.colorMainForText};
          cursor: pointer;
        `}
`;

export const RadioLabelForType = styled.span`
  position: relative;
  display: flex;
  min-width: 420px;
  height: 100%;
  margin-left: -20px;
  padding-left: 46px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 20px;
    height: 17px;
    width: 17px;
    border: 1px solid ${(props) => props.theme.colorForButton};
    border-radius: 50%;
  }

  ${(props) =>
    props.$isChecked &&
    `
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 23px;
      height: 13px;
      width: 13px;
      background-color: ${props.theme.colorForButton};
      border-radius: 50%;
    }
  `}
`;

export const AccordionText = styled.div`
  font-size: 14px;
  line-height: 21px;

  & ul {
    margin: 0;
    padding: 0;
    margin-left: 15px;
  }

  & li {
    list-style-type: disc;
  }
`;

export const Price = styled.span`
  display: block;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 27px;
  font-weight: 700;
`;
