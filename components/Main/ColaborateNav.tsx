import Image from "next/image";
import generalIcono from "../../data/icono";
import { styled } from '../../stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { informativeSlider } from "../../data/informativeSlider";


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
    width: '100%',
    variants: {
        height: {
            Desktop: {
                flexShrink: 0,
                display: 'flex',
                flexWrap: 'wrap ',
                justifyContent: 'space-between',
                padding: '0 10%',
                cursor: 'pointer',
            },
            Tablet: {
                flexShrink: 0,
                display: 'flex',
                flexWrap: 'wrap ',
                padding: '0 10px',
                justifyContent: 'space-between',
                cursor: 'pointer',
            },
            Mobile: {
                flexShrink: 0,
                display: 'flex',
                flexWrap: 'wrap',
                padding: '0 10px',
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
    display: 'flex',
    variants: {
        height: {
            Desktop: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '0 1rem',
                gap: '1rem'
            },
            Tablet: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '0 1rem',
                gap: '1rem'
            },
            Mobile: {
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
    padding: '1rem',
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
                fontSize: '$4',
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
                fontSize: '$2',
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


export const NavColaborate = () => {

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
                            <Image src={generalIcono.iconoPsychology} alt="Psychology" />
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
                </TabsContent>
            </Tabs>

        </Content>
    );
}

