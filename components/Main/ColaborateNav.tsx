import Image from "next/image";
import generalIcono from "../../data/icono";
import { styled } from '../../stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { informativeSlider } from "../../data/informativeSlider";
import { relative } from "node:path/win32";


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
    variants: {
        height: {
            Desktop: {
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '10%',
            },
            Tablet: {
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'row ',
                justifyContent: 'center',
                gap: '3%',
                paddingLeft: '0'
            },
            Mobile: {
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '1%',
                paddingLeft: '20%'
            }
        }
    }
});

// Styles button

const TabsTrigger = styled(TabsPrimitive.Trigger, {
    all: 'unset',
    textTransform: 'uppercase',
    padding: '0 0rem',
    height: 45,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '$1',
    fontWeight: '700',
    color: 'GrayText',
    userSelect: 'none',
    '&:hover': {
        color: 'Gray'
    },
    '&[data-state="active"]': {
        borderBottom: '0.3rem solid $pinkMain',
    },
});

const TabsContent = styled(TabsPrimitive.Content, {
    flexGrow: 1,
    padding: 5,
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
                gap: '1rem',
            },
            Tablet: {
                display: 'flex',
                flexDirection: "row",
                gap: '1rem',
            },
            Mobile: {
                display: 'flex',
                flexDirection: "row",
                gap: '1rem',
                justifyContent: 'flex-start',
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
                justifyContent: 'center',
                margin: '0 1rem',
                gap: '1rem'
            },
            Tablet: {
                flexDirection: 'row',
                justifyContent: 'center',
                margin: '0 1rem',
                gap: '1rem'
            },
            Mobile: {
                flexDirection: 'column',
                justifyContent: 'center',
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
                width: '55%',
                height: '90%',
                color: 'White',
                opacity: '85%',
                alignSelf: 'end'

            },
            Mobile: {
                background: 'black',
                padding:'0.5rem',
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
                padding: '1rem'
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
                        <Image
                            src={generalIcono.iconoPsychology} alt="Psychology" />
                        <TabsTrigger value="tab1">
                            Psicologia
                        </TabsTrigger>
                    </ContentButton>
                    <ContentButton
                        display={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>
                        <Image
                            src={generalIcono.iconoEntrepreneurship} alt="Enterpreneurshio" />
                        <TabsTrigger value="tab2">
                            Emprendimmiento
                        </TabsTrigger>
                    </ContentButton>
                    <ContentButton
                        display={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>
                        <Image
                            src={generalIcono.iconoValueSpirituality} alt="valuesSpirituality" />
                        <TabsTrigger value="tab3">
                            Espiritualidad y valores
                        </TabsTrigger>
                    </ContentButton>
                    <ContentButton
                        display={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop',
                        }}>
                        <Image
                            src={generalIcono.iconoCarePostpartum} alt="PostPartum" />
                        <TabsTrigger value="tab4">
                            Post-partum
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

