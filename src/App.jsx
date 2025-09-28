import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import Invitacion from './Invitacion';
import InvitacionFormal from './InvitacionFormal';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
      style={{ width: '100vw', height: '100vh' }}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      <SwiperSlide>
        <Invitacion isActive={activeIndex === 0} />
      </SwiperSlide>
      <SwiperSlide>
        <InvitacionFormal isActive={activeIndex === 1} />
      </SwiperSlide>
    </Swiper>
  );
}
