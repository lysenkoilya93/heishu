import React, { useRef } from "react";
import "swiper/swiper.scss";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import TeaCard from "/src/components/ui/tea-card/tea-card";
// import { TeaItem, TeaList, StyledTeasList } from "./styles";
import { StyledSlider, StyledButton, SlyderWrapper } from "./styles";

function Slider({ teas }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <SlyderWrapper>
      <StyledButton left ref={navigationPrevRef} title="Назад">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNextRef} title="Вперёд">
        &gt;
      </StyledButton>
      <StyledSlider
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        freeMode
        watchSlidesProgress
        slidesPerView={3}
        spaceBetween={0}
        loop
      >
        {teas &&
          teas.length &&
          teas.map((tea) => (
            <SwiperSlide key={tea.id}>
              <TeaCard {...tea} />
            </SwiperSlide>
          ))}
      </StyledSlider>
    </SlyderWrapper>
  );
}

export default Slider;
