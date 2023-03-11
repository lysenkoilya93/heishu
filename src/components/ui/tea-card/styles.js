import styled from "styled-components";

export const StyledTeaCard = styled.article`
  width: 353px;
  min-height: 610px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colorForCards};
  box-sizing: border-box;
`;

export const StyledCardIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 43px;
  padding: 8px 16px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  box-sizing: border-box;
  border-radius: 8px 8px 8px 0;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colorForIcon};
`;

export const Figure = styled.figure`
  position: relative;
  margin: 0;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 313px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Cost = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colorWhite};
`;

export const Text = styled.p`
  margin-top: 7px;
  margin-bottom: 0;
`;
