import React from "react";
import { godfatherData, kitData } from "../data/howToHelpData";
import Image from "next/image";
import { styled } from "../stitches.config";
import iconWhatsapp from '../public/assets/icons/whatsapp.svg'



const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',

})

const Section = styled('section', {
    variants: {
        direction: {
            Desktop: {
                display: 'flex',
                flexDirection: 'row',
                gap: '3rem',
                padding: '0 2rem',
                margin: '3rem 1rem'
            },
            Tablet: {
                display: 'flex',
                flexDirection: 'column',
                padding: '3rem 2rem',
                gap: '2rem',
            }
        }
    }
})

const ContentInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '1rem',
    background: '#FBFCFC',
    boxShadow: '0px 0px 30px #EAEDED',
    borderRadius: '0.5rem',
    width: '100%',
    padding: '2rem 1rem 1.5rem 1rem',
    border: '0.18rem solid $pinkMain',

})

const Title = styled('h1', {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 'auto',
    color: '$blueMain',
    borderBottom: '0.18rem solid $pinkMain',
    variants: {
        size: {
            Desktop: {
                width: '40%',
                fontSize: '$5'
            },
            Mobile: {
                fontSize: '$4'
            }
        }
    }
})

const SubTitle = styled('h2', {
    textAlign: 'center',
    margin: 0,
    color: '$blueMain',
    variants: {
        size: {
            Desktop: {
                fontSize: '$4'
            },
            Tablet: {
                fontSize: '$4'
            },
            Mobile: {
                fontSize: '$3'
            }
        }
    }
})

const Value = styled('h2', {
    display: 'flex',
    justifyContent: 'center',
    color: '$blueMain',
    fontWeight: '600',
    variants: {
        size: {
            Desktop: {
                fontSize: '$3',
            },
            Tablet: {
                fontSize: '$3',
            },
            Mobile: {
                fontSize: '$3',
            }
        }
    }
})

const Text = styled('text', {
    background: '$pinkMain',
    borderRadius: '1rem 0',
    color: '$white',
    lineHeight: 2,
    fontWeight: '400',
    marginBottom: '1rem',
    variants: {
        size: {
            Desktop: {
                padding: '2rem 1rem',
                fontSize: '$3',
            },
            Tablet: {
                fontSize: '$3',
            },
            Mobile: {
                padding: '1rem 1.5rem',
                fontSize: '$3',
            }
        }
    }
})

const ButtonInfo = styled('div',{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem'
})

const A = styled('a', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    background: '#FDEDEC',
    fontSize: '$2',
    border: 'none',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease 0s',
    color: '#CD6155',
    variants: {
        size: {
            Desktop: {
                padding: '1rem 2rem',
                borderRadius: '3rem',
                width: '20rem',
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
                padding: '0.5rem 0.5rem',
                borderRadius: '3rem',
                border: '3px solid $pinkMain',
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
export const HowToHelp = () => {

    return (
        <Content>
            <Title
                size={{
                    '@initial': 'Mobile',
                    '@bp2': 'Mobile',
                    '@bp3': 'Desktop'
                }}>
                {godfatherData[0].title}
            </Title>
            <SubTitle>Tenemos dos opciones:</SubTitle>
            <Section
                direction=
                {{
                    '@initial': 'Tablet',
                    '@bp3': 'Desktop'
                }}>

                {godfatherData.map(({ text, subTitle, image }, index) => {
                    return (
                        <ContentInfo key={`${text}-${index}`}>
                            <Image
                                src={image}
                                alt="Plan padrinos"
                                layout='intrinsic'
                                objectFit='contain'
                                height={300}
                            />
                            <SubTitle>{subTitle}</SubTitle>
                            <Text
                                size=
                                {{
                                    '@initial': 'Mobile',
                                    '@bp2': 'Tablet',
                                    '@bp3': 'Desktop'
                                }}>
                                {text}
                            </Text>
                        </ContentInfo>
                    )
                })}
            </Section>
            <ButtonInfo>
            <A
                size={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                }}
                target='_blank' rel="noreferrer" href='https://api.whatsapp.com/send/?phone=573202408953&text&app_absent=0&text=Hola%2C%20escribo%20desde%20la%20web%20de%20FundMadre%20por%20los%20informacion%20sobre%20el%20plan%20padrinos'>
                <SubTitle> Contáctanos </SubTitle>
                <Image src={iconWhatsapp} width='45' height='45' /></A>
                </ButtonInfo>
            <Title
                size={{
                    '@initial': 'Mobile',
                    '@bp2': 'Mobile',
                    '@bp3': 'Desktop'
                }}>
                {kitData[0].title}
            </Title>
            <Section direction=
                {{
                    '@initial': 'Tablet',
                    '@bp3': 'Desktop'
                }}>
                {kitData.map(({ text, subTitle, value, image, button, href }, index) => {
                    return (
                        <ContentInfo key={`${text}-${index}`}>
                            <Image
                                src={image}
                                alt="Plan padrinos"
                                layout='intrinsic'
                                objectFit='contain'
                                height={200}
                            />
                            <SubTitle
                                size={{
                                    '@initial': 'Mobile',
                                    '@bp2': 'Tablet',
                                    '@bp3': 'Desktop'
                                }}>{subTitle}</SubTitle>
                            <Value
                                size=
                                {{
                                    '@initial': 'Mobile',
                                    '@bp2': 'Tablet',
                                    '@bp3': 'Desktop'
                                }}
                            >{value}</Value>

                            <Text
                                size=
                                {{
                                    '@initial': 'Mobile',
                                    '@bp2': 'Tablet',
                                    '@bp3': 'Desktop'
                                }}>
                                {text}
                            </Text>
                            <A 
                            target='_blank' rel="noreferrer" href={href}
                            size={{
                                '@initial': 'Mobile',
                                '@bp2': 'Tablet',
                                '@bp3': 'Desktop'
                            }}>
                            {button}
                            <Image src={iconWhatsapp} width='45' height='45' />
                            </A>
                        </ContentInfo>
                    )
                })}
            </Section>
        </Content>
    )
}
