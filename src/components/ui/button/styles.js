import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-height: 60px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  max-width: 700px;
  font-weight: 700;
  line-height: 58px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => `${props.$backgroundColor}`};
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;

// .button {
//   display: block;
//   /* clip-path: polygon(30% 0, 0% 120%, 140% 70%); */
//   min-height: 60px;
//   font-size: 18px;
//   min-width: 260px;
//   max-width: 700px;
//   font-weight: 700;
//   line-height: 58px;
//   color: white;
//   background-color: indianred;
//   text-align: center;
//   border-radius: 50px;
//   text-decoration: none;
//   border: none;
//   background-image: none;
//   box-shadow: none;
//   cursor: pointer;
//   transition: background-color 0.1s ease-out, box-shadow 0.1s ease-out;
// }

// .button:hover,
// .button:active {
//   background-color: lime;
//   /* box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14); */
// }

// .button:active {
//   box-shadow: none;
// }

// .link {
//   text-decoration: none;
//   color: greenyellow;
// }

// .link:hover,
// .link:active {
//   color: darkgreen;
// }
