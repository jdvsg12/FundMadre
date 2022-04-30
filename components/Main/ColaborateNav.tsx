import Image from "next/image";
import generalIcono from "../../data/icono";
import { styled, css } from '../../stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { informativeSlider } from "../../data/informativeSlider";
import { A11y, Keyboard, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


// General content

const Tabs = styled(TabsPrimitive.Root, {
    display: 'flex',
    variants: {
        height: {
            Desktop: {
                flexDirection: 'column',
                width: '100%',
            },
            Tablet: {
                flexDirection: 'column',
                width: '100%',
            },
            Mobile: {
                flexDirection: 'column',
                width: '100%',
            }
        }
    }
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
    color: 'GrayText',
})
const TabsContent = styled(TabsPrimitive.Content, {
    flexGrow: 1,
    padding: 1,
    backgroundColor: 'white',
    outline: 'none',
    gap: '1rem',
});

const Content = styled('div', {
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

const ColaborateContent = styled('div', {
    variants: {
        height: {
            Desktop: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '0 1rem',
                gap: '1rem'
            },
            Tablet: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '0 1rem',
                gap: '1rem'
            },
            Mobile: {
                display: 'none',
                flexDirection: 'column',
                justifyContent: 'space-between',
                margin: '0',
                gap: '1rem'
            }
        }
    }
})

const ContenImages = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
})

const ContentMain = styled('div', {
    position: 'absolute',
    padding: '2rem 0.5rem',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
})

const ContentText = styled('div', {
    color: 'White',
    variants: {
        Content: {
            Desktop: {
                position: 'absolute',
                background: 'black',
                width: '50%',
                color: 'White',
                opacity: '85%',
                alignSelf: 'end'


            },
            Tablet: {
                position: 'absolute',
                background: 'black',
                width: '50%',
                height: 'auto',
                color: 'White',
                opacity: '85%',
                alignSelf: 'end'

            },
            Mobile: {
                background: 'black',
                padding: '0.5rem',
                width: '100%',
                height: 'auto',
                color: 'White',
                opacity: '85%',
                alignSelf: 'end'
            }
        }
    }
})

const H1 = styled('h1', {
    color: '$white',
    variants: {
        height: {
            Desktop: {
                fontSize: '$5',
                padding: '0.5rem'
            },
            Tablet: {
                fontSize: '$3',
                padding: '0.2rem'
            },
            Mobile: {
                fontSize: '$3',
                padding: '1rem'
            }
        }
    }
})

const P = styled('p', {
    color: '$white',
    variants: {
        height: {
            Desktop: {
                fontSize: '$1',
                padding: '0 1rem'
            },
            Tablet: {
                fontSize: '$1',
                padding: '0 1rem'
            },
            Mobile: {
                fontSize: '$1',
                padding: '0 1rem'
            }
        }
    }
})

const swiperContainer = css({
    variants: {
        width: {
            Desktop: {
                display: 'none',
                '& .swiper-pagination-bullets': {
                },
                '& .swiper-pagination-bullet': {},
                '& .swiper-pagination-bullet-active': {},
                '& .swiper-button-next, .swiper-button-prev': {}
            },
            Tablet: {
                display: 'none',
                '& .swiper-pagination-bullets': {
                },
                '& .swiper-pagination-bullet': {},
                '& .swiper-pagination-bullet-active': {},
                '& .swiper-button-next, .swiper-button-prev': {}
            },
            Mobile: {
                position: 'relative',
                height: '300px',
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
        <Content>
            <Tabs
                height={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop',
                }}
                defaultValue="tab1">
                <TabsList
                    height={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp3': 'Desktop',
                    }}>
                    <ContentButton
                        display={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>
                        <TabsTrigger value="tab1">
                            <Image src={generalIcono.iconoPsychology} alt="Psychology"  />
                            <TitleBtn>Psicologia</TitleBtn>
                        </TabsTrigger>
                    </ContentButton>
                    <ContentButton
                        display={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>
                        <TabsTrigger value="tab2">
                            <Image src={generalIcono.iconoEntrepreneurship} alt="Enterpreneurshio" />
                            <TitleBtn>Emprendimiento</TitleBtn>
                        </TabsTrigger>
                    </ContentButton>
                    <ContentButton
                        display={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>
                        <TabsTrigger value="tab3">
                            <Image src={generalIcono.iconoValueSpirituality} alt="valuesSpirituality" />
                            <TitleBtn>Espiritualidad y valores</TitleBtn>
                        </TabsTrigger>
                    </ContentButton>
                    <ContentButton
                        display={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>
                        <TabsTrigger value="tab4">
                            <Image src={generalIcono.iconoCarePostpartum} alt="PostPartum" />
                            <TitleBtn>Post-partum</TitleBtn>
                        </TabsTrigger>
                    </ContentButton>

                </TabsList>
                <TabsContent value="tab1">

                    <ColaborateContent
                        height={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>
                        {informativeSlider.PsychologyTab1.map(({ title, image, alt, text }, index) => {

                            return (

                                <ContenImages key={`${title}-${index}`}>

                                    <Image
                                        src={image}
                                        alt={alt} />
                                    <ContentMain>
                                        <ContentText
                                            Content={{
                                                '@initial': 'Mobile',
                                                '@bp2': 'Tablet',
                                                '@bp3': 'Desktop',
                                            }}
                                            key={`${title}-${index}`}
                                        >
                                            <H1
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{title}</H1>
                                            <P
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{text}</P>
                                        </ContentText>
                                    </ContentMain>
                                </ContenImages>

                            )
                        }
                        )}
                    </ColaborateContent>
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
                            {informativeSlider.PsychologyTab1.map(({ title, image, alt, text }, index) => {


                                return (
                                    <SwiperSlide
                                        key={`${title}-${index}`}>
                                        <Image
                                            src={image}
                                            alt={alt}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                        <ContentMain>
                                        <ContentText
                                            key={`${title}-${index}`}
                                            Content={{
                                                '@initial': 'Mobile',
                                                '@bp2': 'Tablet',
                                                '@bp3': 'Desktop',
                                            }}>
                                            <H1
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{title}</H1>
                                            <P
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{text}</P>
                                        </ContentText>
                                    </ContentMain>

                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                </TabsContent>
                <TabsContent value="tab2">
                    <ColaborateContent
                        height={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>

                        {informativeSlider.EntrepreneurshipTab2.map(({ title, image, alt, text }, index) => {

                            return (

                                <ContenImages key={`${title}-${index}`}>
                                    <Image
                                        src={image}
                                        alt={alt} />
                                    <ContentMain>
                                        <ContentText
                                            key={`${title}-${index}`}
                                            Content={{
                                                '@initial': 'Mobile',
                                                '@bp2': 'Tablet',
                                                '@bp3': 'Desktop',
                                            }}>
                                            <H1
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{title}</H1>
                                            <P
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{text}</P>
                                        </ContentText>
                                    </ContentMain>

                                </ContenImages>
                            )
                        }
                        )}
                    </ColaborateContent>
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
                            {informativeSlider.EntrepreneurshipTab2.map(({ title, image, alt, text }, index) => {


                                return (
                                    <SwiperSlide
                                        key={`${title}-${index}`}>
                                        <Image
                                            src={image}
                                            alt={alt}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                        <ContentMain>
                                        <ContentText
                                            key={`${title}-${index}`}
                                            Content={{
                                                '@initial': 'Mobile',
                                                '@bp2': 'Tablet',
                                                '@bp3': 'Desktop',
                                            }}>
                                            <H1
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{title}</H1>
                                            <P
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{text}</P>
                                        </ContentText>
                                    </ContentMain>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                </TabsContent>
                <TabsContent value="tab3">
                    <ColaborateContent
                        height={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>

                        {informativeSlider.ValuesTab3.map(({ title, image, alt, text }, index) => {

                            return (

                                <ContenImages key={`${title}-${index}`}>
                                    <Image
                                        src={image}
                                        alt={alt} />
                                    <ContentMain>
                                        <ContentText
                                            key={`${title}-${index}`}
                                            Content={{
                                                '@initial': 'Mobile',
                                                '@bp2': 'Tablet',
                                                '@bp3': 'Desktop',
                                            }}>
                                            <H1
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{title}</H1>
                                            <P
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{text}</P>
                                        </ContentText>
                                    </ContentMain>
                                </ContenImages>
                            )
                        }
                        )}
                    </ColaborateContent>
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
                            {informativeSlider.ValuesTab3.map(({ title, image, alt, text }, index) => {


                                return (
                                    <SwiperSlide
                                        key={`${title}-${index}`}>
                                        <Image
                                            src={image}
                                            alt={alt}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                        <ContentMain>
                                        <ContentText
                                            key={`${title}-${index}`}
                                            Content={{
                                                '@initial': 'Mobile',
                                                '@bp2': 'Tablet',
                                                '@bp3': 'Desktop',
                                            }}>
                                            <H1
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{title}</H1>
                                            <P
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{text}</P>
                                        </ContentText>
                                    </ContentMain>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                </TabsContent>
                <TabsContent value="tab4">
                    <ColaborateContent
                        height={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>

                        {informativeSlider.PostPartoTab4.map(({ title, image, alt, text }, index) => {

                            return (

                                <ContenImages key={`${title}-${index}`}>
                                    <Image
                                        src={image}
                                        alt={alt} />
                                    <ContentMain>
                                        <ContentText
                                            key={`${title}-${index}`}
                                            Content={{
                                                '@initial': 'Mobile',
                                                '@bp2': 'Tablet',
                                                '@bp3': 'Desktop',
                                            }}>
                                            <H1
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{title}</H1>
                                            <P
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{text}</P>
                                        </ContentText>
                                    </ContentMain>
                                </ContenImages>
                            )
                        }
                        )}
                    </ColaborateContent>
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
                            {informativeSlider.PostPartoTab4.map(({ title, image, alt, text }, index) => {


                                return (
                                    <SwiperSlide
                                        key={`${title}-${index}`}>
                                        <Image
                                            src={image}
                                            alt={alt}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                        <ContentMain>
                                        <ContentText
                                            key={`${title}-${index}`}
                                            Content={{
                                                '@initial': 'Mobile',
                                                '@bp2': 'Tablet',
                                                '@bp3': 'Desktop',
                                            }}>
                                            <H1
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{title}</H1>
                                            <P
                                                height={{
                                                    '@initial': 'Mobile',
                                                    '@bp2': 'Tablet',
                                                    '@bp3': 'Desktop',
                                                }}>{text}</P>
                                        </ContentText>
                                    </ContentMain>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                </TabsContent>
            </Tabs>

        </Content>
    );
}
