import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  height: 44px;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  height: 50px;
  margin-left: 24px;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: ${(props) => props.theme.colorForSiteName};
`;
