
import { css } from "@stitches/react";
import Image from "next/image";
import React, { Component } from "react";
import { A11y, Keyboard, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


const swiperContainer = css({
  '& .swiper-pagination-bullets': {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '1%',
    paddingBottom: '1%',  
  },
  '& .swiper-pagination-bullet': {
    width: '1.875rem',
    height: '1.8rem',
    backgroundColor: '$pinkMain',
    opacity: 1,
  },
  '& .swiper-pagination-bullet-active': {
    border: '4px solid $pinkMain',
    backgroundColor: '$white',
  },
  '& .swiper-button-next, .swiper-button-prev': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      right: '10px',
      padding: '30px',
      color: '#000 !important',
      fill: 'black !important',
      stroke: 'black !important',
  }
});

interface Slider {
  title: string;
  image: StaticImageData | string;
}

interface CarouselProps {
  sliders: Array<Slider>,
  setActiveSlider?: (activeSliderIndex: number) => void
}

export const Carousel = ({ setActiveSlider, sliders }: CarouselProps) => {
  return (
    <Swiper
      className={swiperContainer()}
      modules={[Keyboard, Navigation, Pagination, A11y]}
      onActiveIndexChange={({ activeIndex }) => setActiveSlider?.(activeIndex)}
      pagination={{ clickable: true }}
      keyboard={true}
      navigation={true}
      loop={true}
      a11y={{
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      }}
      cssMode={true}
    >
      {sliders.map(({ image, title }, index) => {

        return (
          <SwiperSlide key={`${title}-${index}`}>
            <Image 
              src={image}
              alt={title}
              layout='intrinsic'
            />
            
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}