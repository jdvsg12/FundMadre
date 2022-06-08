
import { styled, css } from "../stitches.config";
import Image from "next/image";
import React, { Component } from "react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
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
            fontSize: 30,
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
            fontSize: 30,
          }
        }
      }
    }
  }
});

const Content = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  background: '$pinkMain',
  opacity: '100%',
  variants: {
    size: {
      Desktop: {
        borderRadius: '0 30px 30px 30px',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
        width: '20%',
        padding: '2rem',
        left: '3rem',
        bottom: '4rem',
      },
      Tablet: {
        borderRadius: '0 20px 20px 20px',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
        width: '40%',
        padding: '2rem',
        left: '3rem',
        bottom: '4rem',
      },
      Mobile: {
        borderRadius: '0 5px 5px 5px',
        width: '50%',
        padding: '1rem',
        margin: '0 2.3rem',
        bottom: '1rem',
        opacity: '90%'
      }
    }
  }
})

const H1 = styled('h1', {
  color: 'DarkRed',
  textTransform: 'uppercase',
  padding: '0',
  margin: '0',
  variants: {
    size: {
      Desktop: {
        fontSize: '$4',
        fontWeight: '700',
      },
      Tablet: {
        fontSize: '$3',
        fontWeight: '600',
      },
      Mobile: {
        fontSize: '$2',
        fontWeight: '600',
      }
    }
  }
})

const P = styled('p', {
  color: 'DarkRed',
  margin: '1rem 0',
  variants: {
    size: {
      Desktop: {
        fontWeight: '400',
        fontSize: '$4'
      },
      Tablet: {
        fontWeight: '400',
        fontSize: '$3'
      },
      Mobile: {
        fontWeight: '400',
        fontSize: '$2'
      }
    }
  }
})

const Button = styled('button', {
  fontSize: '$2',
  border: 'none',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease 0s',
  color: 'GrayText',
  variants: {
    size: {
      Desktop: {
        padding: '1rem 2rem',
        borderRadius: '3rem',
        '&:hover': {
          background: '#FDEDEC',
          boxShadow: '0px 15px 20px #B03A2E',
          color: '#CD6155',
          transform: 'translateY(-7px)'
        }
      },
      Tablet: {
        padding: '0.5rem 1rem',
        borderRadius: '1rem',
        '&:hover': {
          background: '#FDEDEC',
          boxShadow: '0px 15px 20px #B03A2E',
          color: '#CD6155',
          transform: 'translateY(-7px)'
        }
      },
      Mobile: {
        padding: '0.1rem 0.5rem',
        borderRadius: '3rem',
        '&:hover': {
          background: '#FDEDEC',
          boxShadow: '0px 15px 20px #B03A2E',
          color: '#CD6155',
          transform: 'translateY(-7px)'
        }
      }
    }
  }
})

interface Slider {
  title: string;
  image: StaticImageData | string;
  message: string;
  href: string;
  textBtn: string;
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
      modules={[Keyboard, Navigation, Pagination, A11y, Autoplay]}
      onActiveIndexChange={({ activeIndex }) => setActiveSlider?.(activeIndex)}
      pagination={{ clickable: true }}
      keyboard={true}
      navigation={true}
      autoplay={{delay: 5000}}
      loop={true}
      a11y={{
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      }}
      cssMode={true}
    >
      {sliders.map(({ title, image, message, href, textBtn }, index) => {

        return (
          <SwiperSlide
            key={`${title}-${index}`}>
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
            />
            <Content
             size={{
              '@initial': 'Mobile',
              '@bp2': 'Tablet',
              '@bp3': 'Desktop'
            }}
            >
              <H1
                size={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}
              >{title}</H1>
              <P
                size={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}
              >{message}</P>
              <Button
                size={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}
              ><a target='_blank' rel="noreferrer" href={href}>{textBtn}</a></Button>
            </Content>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}