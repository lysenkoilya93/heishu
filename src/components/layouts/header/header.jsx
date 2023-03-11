import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layouts/nav/nav";
import { StyledSection } from "./styles";
// import "./style.css";

// шапка сайта
function Header({
  pageUrl // урл страницы
}) {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav pageUrl={pageUrl} />
    </StyledSection>
  );
}

export default Header;

// function Header() {
//   return (
//     <header className="header">
//       <Logo />
//       <Nav />
//     </header>
//   );
// }

// export default Header;
