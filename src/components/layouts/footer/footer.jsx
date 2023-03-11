import React from "react";
import Logo from "/src/components/ui/logo/logo";
// import "./style.css";
import { StyledSection, Copyright } from "./styles";

// подвал сайта
function Footer() {
  return (
    <StyledSection as="footer">
      <Copyright>Создано 2023</Copyright>
      <Logo />
    </StyledSection>
  );
}

export default Footer;

// function Footer() {
//   return (
//     <footer className="footer">
//       <span className="footer__copyright">Создано 2023</span>
//       <Logo />
//     </footer>
//   );
// }

// export default Footer;
