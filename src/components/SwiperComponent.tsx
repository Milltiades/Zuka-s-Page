/* eslint-disable import/no-anonymous-default-export */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import 'swiper/css/autoplay';
import styled from 'styled-components';



const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 5000 }}
    //   pagination={{ clickable: true }}
    >
     
      <SwiperSlide>
        <Img src="./assets/zuka.jpg" alt="zuka1" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="./assets/zuka.jpg" alt="zuka2" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="./assets/zuka.jpg" alt="zuka3" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="./assets/zuka.jpg" alt="zuka4" />
      </SwiperSlide>
      
    </Swiper>
  );
};


export default SwiperComponent;

const Img = styled.img`
    width: 100%;
    height: auto;
`

