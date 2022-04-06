
import { css } from "@stitches/react";
import Image from "next/image";
import React, { Component } from "react";
import { A11y, Keyboard, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { MainBannerForm, MainBannerFormVoluntary, MainBannerFormKit } from './Main/Form';


const swiperContainer = css({
  '& .swiper-pagination-bullets': {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '5.375rem',
    bottom: '4.31rem',
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