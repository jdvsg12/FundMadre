import { useState } from "react";
import { forms, heroCarousel } from "../data/heroCarousel";
import { styled } from "../stitches.config";
import { Carousel } from "./Carousel";


const Container = styled('div', {
  position: 'relative',
});

const HeroContainer = styled('div', {
  position: 'relative',
  width: '100%',
})

const TextContainer = styled('div', {
  position: 'absolute',
  color: '$white',
  fontSize: '$5',
  left: '4rem',
  bottom: '20rem',
  alignItems: 'left',
  width: '30rem',
  fontWeight: '700',
  textShadow:'0.3rem 0.3rem 1rem black',
  zIndex: '9999'
})

export const Hero = () => {
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);

  console.log(carouselActiveIndex)

  return (
    <Container>
      <HeroContainer>
        <Carousel setActiveSlider={(activeIndex) => setCarouselActiveIndex(activeIndex)} sliders={heroCarousel.carouselImages} />
      </HeroContainer>

    </Container>
  )
}