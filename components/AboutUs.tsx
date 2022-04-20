import React from 'react';
import { styled } from '../stitches.config';
import generalImg from '../data/generalImg';
import Image from 'next/image';


const ContentAbout = styled('div', {
    variants: {
        width: {
            Desktop: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '5rem',
            },
            Tablet: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3rem',
            },
            Mobile: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3rem',
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
    variants: {
        width: {
            Desktop: {
                display: 'flex',
                justifyContent: 'flex-start',
                padding: '0 5rem',
            },
            Tablet: {
                width: '50%'
            },
            Mobile: {
                width: '50%'
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

export const AbouteUs = () => {

    return (
        <ContentAbout
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
                    ¿Quiénes somos?</Title>
                <P
                    font={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp4': 'Desktop'
                    }}
                >La Fundación Vida madre de nuevas generaciones (Fundmadre),
                    entidad sin ánimo de Lucro nace para mejorar la calidad de vida de mujeres gestantes
                    vulnerables en Bogotá y las periferias. a través de su modelo de acompañamiento en Psicosocial,
                    en Enfermería, en emprendimiento y en Espiritualidad y valores, busca fracturar los siclos de
                    pobreza generados por el desplazamiento, la migración, el abandono y la falta de oportunidades.
                </P>
            </AboutText>
            <AboutImg
                width={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp4': 'Desktop'
                }}>
                <Image
                    src={generalImg.LogoImagFundmadre}
                    alt="psicologia"
                    layout='intrinsic'
                    objectFit='contain'
                />
            </AboutImg>
        </ContentAbout>
    )
}