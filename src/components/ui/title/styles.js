import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  line-height: 41px;
  color: ${(props) => props.theme.colorForTitle};
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "28px";
    }
    return fontSize;
  }};
`;

// .title {
//   margin: 0;
//   padding: 0;
//   font-weight: 700;
//   font-size: 36px;
//   line-height: 41px;
// }

// .title_small {
//   font-size: 28px;
//   color: darkgreen;
// }

// .title_big {
//   font-size: 44px;
//   color: darkgreen;
// }
