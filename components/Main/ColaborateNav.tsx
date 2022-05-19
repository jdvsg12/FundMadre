import Image from "next/image";
import { styled, css } from '../../stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { informativeTabSlider } from "../../data/informativeSlider";
import { A11y, Keyboard, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


// General content

const Tabs = styled(TabsPrimitive.Root, {
    width: '100%',
});

// Content button

const TabsList = styled(TabsPrimitive.List, {
    background: 'white',
    width: '100%',
    variants: {
        height: {
            Desktop: {
                boxShadow: 'black 0px 2px 10px 0px',
                flexShrink: 0,
                display: 'flex',
                flexWrap: 'wrap ',
                justifyContent: 'space-between',
                padding: '1% 10% 0% 10%',
                cursor: 'pointer',
            },
            Tablet: {
                boxShadow: 'black 0px 2px 10px 0px',
                flexShrink: 0,
                display: 'flex',
                flexWrap: 'wrap ',
                padding: '1% 10% 0% 10%',
                justifyContent: 'space-between',
                cursor: 'pointer',
            },
            Mobile: {
                boxShadow: 'black 0px 2px 10px 0px',
                flexShrink: 0,
                display: 'flex',
                flexWrap: 'wrap',
                padding: '1% 10% 0% 10%',
                gap: 10,
                justifyContent: 'center',
            }
        }
    }
});

// Styles button

const TabsTrigger = styled(TabsPrimitive.Trigger, {
    all: 'unset',
    textTransform: 'uppercase',
    height: 35,
    flex: 1,
    display: 'flex',
    gap: 10,
    transition: 'all 0.5s ease 0s',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    '&[data-state="active"]': {
        borderBottom: '0.3rem solid $pinkMain',
    },

});

const TitleBtn = styled('legend', {
    fontSize: '$1',
    fontWeight: '700',
    color: 'darkred',
})
const TabsContent = styled(TabsPrimitive.Content, {
    padding: 1,
    outline: 'none',
    variants: {
        flex: {
            Desktop: {
                display: 'flex',
                flexDirection: 'row',
            },
            Tablet: {
                display: 'flex',
                flexDirection: 'column',
            },
            Mobile: {
                display: 'flex',
                flexDirection: 'column',
                outline: 'none',
            }
        }
    }
});

const Content = styled('div', {
    display: 'flex',
    variants: {
        row: {
            Desktop: {
                display: 'flex',
                flexDirection: 'column',
            },
            Tablet: {
                flexDirection: 'column',
            },
            Mobile: {
                flexDirection: 'row',
            }
        }
    }
})

const ContentButton = styled('div', {
    variants: {
        display: {
            Desktop: {
                display: 'flex',
                flexDirection: "row",
                justifyContent: 'space-between',
                gap: '1rem',
                height: 50
            },
            Tablet: {
                display: 'flex',
                flexDirection: "row",
                justifyContent: 'space-between',
                gap: '1rem',
                height: 50

            },
            Mobile: {
                display: 'flex',
                flexDirection: "row",
                gap: '1rem',
                justifyContent: 'flex-start',
                height: 50

            }
        }
    }
})

const ContentText = styled('div', {
    display: 'flex',
    background: 'linear-gradient(235deg, #B03A2E 10%, LightCoral 100%)',
    height: 'auto',
    variants: {
        Content: {
            Desktop: {
                flexDirection: 'column',
                justifyContent: 'center',
                width: '25%',
                alignItems: 'start',
                padding: '0 2rem',
            },
            Tablet: {
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                padding: '3rem 3rem',
            },
            Mobile: {
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                padding: '1rem 3rem',
            }
        }
    }
})

const H1 = styled('h1', {
    textShadow: '2px 2px 4px Maroon',
    color: '$white',
    variants: {
        height: {
            Desktop: {
                fontSize: '$5',
            },
            Tablet: {
                fontSize: '$4',
            },
            Mobile: {
                fontSize: '$3',
            }
        }
    }
})

const P = styled('p', {
    textShadow: '2px 2px 4px Maroon',
    color: '$white',
    fontWeight: '500',
    variants: {
        height: {
            Desktop: {
                fontSize: '$3',
                lineHeight: 2,
            },
            Tablet: {
                fontSize: '$2',
            },
            Mobile: {
                fontSize: '$2',
            }
        }
    }
})

const swiperContainer = css({
    variants: {
        width: {
            Desktop: {
                width: '75%',
                height: 500,
                '& .swiper-pagination-bullets': {
                },
                '& .swiper-pagination-bullet': {},
                '& .swiper-pagination-bullet-active': {},
                '& .swiper-button-next, .swiper-button-prev': {}
            },
            Tablet: {
                width: '100%',
                height: 300,
                '& .swiper-pagination-bullets': {
                },
                '& .swiper-pagination-bullet': {},
                '& .swiper-pagination-bullet-active': {},
                '& .swiper-button-next, .swiper-button-prev': {}
            },
            Mobile: {
                width: '100%',
                height: 300,
                '& .swiper-pagination-bullets': {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: '0.5%',
                    paddingBottom: '0%',
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
                        fontSize: 20,
                    }
                }
            },
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


export const NavColaborate = ({ setActiveSlider, sliders }: CarouselProps) => {

    return (
        <Content
            row={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
            }}>
            <Tabs
                defaultValue={informativeTabSlider[0].tabName}>
                <TabsList
                    height={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp3': 'Desktop',
                    }}>

                    {informativeTabSlider.map(({ titleBtn, tabName, icon, alt }, index) => {

                        return (
                            <ContentButton key={`${titleBtn}-${index}`}
                                display={{
                                    '@initial': 'Mobile',
                                    '@bp2': 'Tablet',
                                    '@bp3': 'Desktop',
                                }}>
                                <TabsTrigger value={tabName}>
                                    <Image src={icon} alt={alt} />
                                    <TitleBtn>{titleBtn}</TitleBtn>
                                </TabsTrigger>
                            </ContentButton>
                        )
                    })}

                </TabsList>
                {informativeTabSlider.map(({ titleBtn, tabName, images, alt, text }, index) => {

                    return (

                        <TabsContent key={`${titleBtn}-${index}`}
                         value={tabName}
                        flex={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop'
                            }}>

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
                                cssMode={true}>
                                {images.map((image) => {

                                    return (
                                        <SwiperSlide
                                            key={`${titleBtn}-${index}`}>
                                            <Image
                                                src={image}
                                                alt={alt}
                                                layout="fill"
                                                objectFit="cover" />

                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            <ContentText
                                Content={{
                                    '@initial': 'Mobile',
                                    '@bp2': 'Tablet',
                                    '@bp3': 'Desktop'
                                }}>
                                <H1
                                    height={{
                                        '@initial': 'Mobile',
                                        '@bp2': 'Tablet',
                                        '@bp3': 'Desktop'
                                    }}>{titleBtn}</H1>
                                <P
                                    height={{
                                        '@initial': 'Mobile',
                                        '@bp2': 'Tablet',
                                        '@bp3': 'Desktop'
                                    }}
                                >{text}</P>
                            </ContentText>
                        </TabsContent>)
                })}
            </Tabs>
        </Content >
    );
}
