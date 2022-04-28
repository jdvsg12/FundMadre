
import { css } from "../stitches.config";
import Image from "next/image";
import React, { Component } from "react";
import { A11y, Keyboard, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";



const swiperContainer = css({
  variants: {
    width: {
      Desktop: {
        position: 'relative',
        height: '500px',
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
          backgroundColor: 'rgba(255, 255, 255, 0.0)',
          color: '$pinkMain !important',
          right: 10,
          fontWeight: '800',
          textShadow: '2px 2px 10px black !important',
          '&:after': {
            fontSize: 50,
          }
        }
      },
      Tablet: {
        position: 'relative',
        height: '400px',
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
          border: '3px solid $pinkMain',
          backgroundColor: '$white',
        },
        '& .swiper-button-next, .swiper-button-prev': {
          backgroundColor: 'rgba(255, 255, 255, 0.0)',
          color: '$pinkMain !important',
          right: 10,
          fontWeight: '800',
          textShadow: '2px 2px 10px black !important',
          '&:after': {
            fontSize: 20,
          }
        }
      },
      Mobile: {
        position: 'relative',
        height: '300px',
        '& .swiper-pagination-bullets': {
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '1%',
          paddingBottom: '1%',
        },
        '& .swiper-pagination-bullet': {
          width: '1rem',
          height: '1rem',
          backgroundColor: '$pinkMain',
          opacity: 1,
        },
        '& .swiper-pagination-bullet-active': {
          border: '2px solid $pinkMain',
          backgroundColor: '$white',
        },
        '& .swiper-button-next, .swiper-button-prev': {
          backgroundColor: 'rgba(255, 255, 255, 0.0)',
          color: '$pinkMain !important',
          right: 10,
          fontWeight: '800',
          textShadow: '2px 2px 10px black !important',
          '&:after': {
            fontSize: 15,
          }
        }
      }
    }
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
      className={swiperContainer({
        width: {
          '@initial': 'Mobile',
          '@bp2': 'Tablet',
          '@bp3': 'Desktop'
        }
      }
      )}
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
          <SwiperSlide
            key={`${title}-${index}`}>
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
            />

          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}