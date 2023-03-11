import styled from "styled-components";

export const StyledSection = styled.section`
  position: absolute;
  width: ${(props) => props.theme.pageWidth};
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  height: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.colorForHeaderAndFooter};
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-left: 90px;
  padding-right: 90px;
  box-sizing: border-box;
`;

export const Copyright = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  background-color: ${(props) => props.theme.colorForLightBackground};
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;
