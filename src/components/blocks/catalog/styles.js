import styled from "styled-components";
import { Ul, Li } from "/src/components/styled";

export const List = styled(Ul)`
  margin-top: ${(props) => props.theme.indent};
  font-size: 0;
  text-align: center;
`;

export const ListItem = styled(Li)`
  display: inline-block;
  width: 200px;
  margin-bottom: ${(props) => props.theme.indent};
  margin-left: ${(props) => props.theme.indent};
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.textColorMuted};
  padding: 5px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
`;
