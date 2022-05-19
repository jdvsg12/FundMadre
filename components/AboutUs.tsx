import React, { useRef, useState } from "react";
import { aboutData, ourTeamData, teamData, voluntaryData } from '../data/aboutUsData';
import { styled, css } from '../stitches.config';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from 'next/image';


const Content = styled('div', {
    variants: {
        width: {
            Desktop: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            },
            Tablet: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            },
            Mobile: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }
        }
    }
});

const AboutText = styled('div', {
    variants: {
        width: {
            Desktop: {
                display: 'flex',
                width: '50%',
            },
            Tablet: {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%',
                padding: '0 5rem'
            },
            Mobile: {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '0 3rem'
            }
        }
    }
});

const AboutImg = styled('div', {
    padding: '2rem 3rem',
    variants: {
        width: {
            Desktop: {
                display: 'flex',
                justifyContent: 'center',
                width: '50%'
            },
            Tablet: {
                width: '100%'
            },
            Mobile: {
                width: '100%'
            }
        }
    }
});

const Title = styled('h1', {
    color: '$blueMain',
    lineHeight: '4rem',
    borderBottom: '0.18rem solid $pinkMain',
    variants: {
        font: {
            Desktop: {
                fontSize: '$5',
            },
            Tablet: {
                fontSize: '$4'
            },
            Mobile: {
                fontSize: '$4'
            }
        }
    }
})

const P = styled('p', {
    color: 'GrayText',
    lineHeight: '1.5rem',
    variants: {
        font: {
            Desktop: {
                fontSize: '$3',
                paddingLeft: '3rem',
            },
            Tablet: {
                fontSize: '$2',
                paddingLeft: '1rem'
            },
            Mobile: {
                fontSize: '$2',
            }
        }
    }
})

const CardTeamContent = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: -80,
    marginBottom: 40,
    marginLeft: 0,
    marginRight: 0
})

const CardTeamBox = styled('div', {
    border: '0.15rem solid $pinkMain',
    padding: '4rem 1rem 1rem 1rem',
    width: '75%',

})

const H1 = styled('h2', {
    color: 'GrayText',
    fontSize: '$3',
    textTransform: 'uppercase'
})

const H2 = styled('h3', {
    color: 'GrayText',
    fontSize: '$2',

})



const Text = styled('p', {
    color: 'GrayText',
    fontSize: '$2'
})

const ContentPerfilImag = styled('div', {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    top: '5rem',
})

const Legend = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    color: '$blueMain',
    fontSize: '$4',
    padding: '0 0 2rem 0',
    gap: '1rem',
    
})


const swiperContainer = css({
        '& .swiper-pagination-bullets': {
    },
    '& .swiper-button-next, .swiper-button-prev': {}
});

export const AbouteUs = () => {

    return (
        <section>
            <Content
                width=
                {{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                }}>
                <AboutText
                    width={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp3': 'Desktop'
                    }}>
                    <Title
                        font={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp4': 'Desktop'
                        }}>
                        {aboutData.title}</Title>
                    <P
                        font={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp4': 'Desktop'
                        }}
                    >{aboutData.text}</P>
                </AboutText>
                <AboutImg
                    width={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp3': 'Desktop'
                    }}>
                    <Image
                        src={aboutData.image}
                        alt="psicologia"
                        layout='intrinsic'
                        objectFit='contain'
                    />
                </AboutImg>
            </Content>
            <Content>
                <AboutText
                    width={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp3': 'Desktop'
                    }}>
                    <Title
                        font={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp4': 'Desktop'
                        }}>
                        {ourTeamData.title}</Title>
                    <P
                        font={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp4': 'Desktop'
                        }}
                    >{ourTeamData.text}</P>
                </AboutText>
            </Content>
            <Swiper
                modules={[Navigation]}
                className="swiperContainer"
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                cssMode={true}
                breakpoints={{
                    280: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    680: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
 >
      {teamData.map(({ perfil, name, position, degree }, index) => {

            return (
                <SwiperSlide key={`${perfil}-${index}`}>
                    <CardTeamContent>
                    <ContentPerfilImag>
                        <Image
                            src={perfil}
                            alt="Profile"
                            layout='intrinsic'
                            objectFit='contain'
                            height={200}
                        /></ContentPerfilImag>
                    <CardTeamBox>
                        <H1>{name}</H1>
                        <H2>{position}</H2>
                        <Text>{degree}</Text>
                    </CardTeamBox>
                </CardTeamContent>
                </SwiperSlide>
               )
            })}
            </Swiper>
            {/* <Legend>{voluntaryData.text}<a href='/contactanos'> {voluntaryData.button}</a>
            </Legend> */}
        </section>
    )
}