import styled from "styled-components";
import itsTeaTime from "/src/assets/itsteatime1.webp";
import mapMark from "/src/assets/map-mark.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled.section`
  position: relative;
  padding-left: 643px;
  padding-top: 159px;
  padding-bottom: 159px;
  padding-right: ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorForLightBackground};
  align-items: center;
  z-index: 1;
  /* min-height: 535px; */

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: block;
    content: "";
    width: 535px;
    height: 535px;
    margin: auto;
    background-image: url(${itsTeaTime});
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  min-width: 650px;
  z-index: 3;
`;

export const Text = styled(Paragraph)`
  margin-top: ${(props) => props.theme.indent};
  padding-right: 122px;
  margin-bottom: 40px;
`;

export const WorkTime = styled(Paragraph)`
  display: inline-block;
  min-height: 43px;
  min-width: 292px;
  margin-bottom: ${(props) => props.theme.indent};
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  vertical-align: middle;
`;

export const Address = styled(Paragraph)`
  &::before {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    content: "";
    background-image: url(${mapMark});
  }
`;
