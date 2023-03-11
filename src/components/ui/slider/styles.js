import styled from "styled-components";
import { Swiper } from "swiper/react";
/*import Button from "/src/components/ui/button/button";
import cloudImage from "/src/assets/cloud-image.svg";
import leafImage from "/src/assets/leaf-image.svg";*/

export const StyledSlider = styled(Swiper)`
  display: flex;
  /*justify-content: space-around;*/
  width: 1280px;
  height: auto;
  /* padding: 0; */
  /* padding-left: auto; */
  /* padding-right: auto; */
  /* margin: 0; */
  /* margin-left: 15px;
  margin-right: 15px; */
  margin-left: 30px;
  margin-right: 30px;
  align-items: stretch;
  /*text-align: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* margin: 0; */
  /* display: flex; */
`;

export const SlyderWrapper = styled.div`
  position: relative;
  width: 1280px;
  margin: 0;
`;

export const StyledButton = styled.button`
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => (props.left ? "5px" : "auto")};
  right: ${(props) => (props.right ? "5px" : "auto")};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 3px;
  line-height: 1;
  padding: 0;
`;

// .photo-container {
//   height: 60vh;
//   width: 100%;
//   display: flex;
//   align-items: center;
// }
// .photos {
//   background-position: center;
//   background-size: cover;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   margin-right: 0;
// }
// .swiper-container {
//   height: 300px;
//   width: 300px;
// }
// .swiper-slide {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// export const StyledTeasList = styled.section`
//   position: relative;
//   display: flex;
//   padding-right: ${(props) => props.theme.pagePadding};
//   padding-left: ${(props) => props.theme.pagePadding};
//   padding-top: 100px;
//   padding-bottom: 80px;
//   background-color: ${(props) => props.theme.colorForListBackground};
//   background-image: url(${cloudImage});
//   background-position: left bottom;
//   background-size: 449px 304px;
//   background-repeat: no-repeat;
//   flex-direction: column;
//   align-items: center;
//   overflow: hidden;

//   &::after {
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     width: 111px;
//     height: 158px;
//     content: "";
//     background-image: url(${leafImage});
//     background-size: contain;
//     background-repeat: no-repeat;
//   }
// `;

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
  margin-right: 20px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 27px;
  /* vertical-align: top; */
  /* text-align: left; */
  /* flex-grow: 1; */
`;
