import styled from "styled-components";
import cloudImage from "/src/assets/cloud-image.svg";
import leafImage from "/src/assets/leaf-image.svg";

export const StyledTeasList = styled.section`
  /*width: 1280px;*/
  position: relative;
  display: flex;
  /*justify-content: space-around;*/
  /* padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding}; */
  padding-top: 50px;
  padding-bottom: 80px;
  align-items: stretch;
  
  /* background-color: ${(props) => props.theme.colorForListBackground}; */
  background-color: #e7b1b1;
  background-image: url(${cloudImage});
  background-position: left bottom;
  background-size: 449px 304px;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 111px;
    height: 158px;
    content: "";
    background-image: url(${leafImage});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const TeaList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 44px;
  margin-bottom: 44px;
  margin-left: -20px;
  font-size: 0;
  line-height: 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
`;

export const TeaItem = styled.li`
  display: flex;
  /* display: inline-block; */
  align-items: stretch;
  text-align: left;
  /* overflow: hidden; */
  list-style: none;
  /* vertical-align: stretch; */
  margin-left: 20px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 27px;
  /* vertical-align: top; */
  /* text-align: left; */
  /* flex-grow: 1; */
`;
