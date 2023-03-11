import React from "react";
import logo from "/src/assets/banchzhan_1.webp";
import { AppRoute } from "/src/const";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { useLocation } from "react-router-dom";

// Логотип сайта с названием
function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <img
        src={logo}
        width="50"
        height="50"
        alt="логотип"
        style={{ borderRadius: "50%" }}
      />
      <Text>Heishu</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <img
        src={logo}
        width="50"
        height="50"
        alt="логотип"
        style={{ borderRadius: "50%" }}
      />
      <Text>Heishu</Text>
    </StyledLogo>
  );
}

export default Logo;
