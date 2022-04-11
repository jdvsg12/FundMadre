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