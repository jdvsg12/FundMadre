import React from 'react';
import { styled } from '../stitches.config';
import { CardTeam } from './Main/CardTeam';

const ContentOur = styled('div', {
    variants: {
        width: {
            Desktop: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            },
            Tablet: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            Mobile: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }
        }
    }
});

const OurText = styled('div', {
    variants: {
        width: {
            Desktop: {
                display: 'flex',
                width: '100%',
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

const H1 = styled('h1', {
    color: '$blueMain',
    lineHeight: '4rem',
    borderBottom: '0.18rem solid $pinkMain',
    variants: {
        font: {
            Desktop: {
                fontSize: '$5',
                width: '40%',
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

const OurTeamContent = styled('div', {
    variants: {
        flex: {
            Desktop: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '2rem'
            },
            Tablet: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '0 5rem',
                gap: '1rem',
            },
            Mobile: {
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: '2rem'
            }
        }
    }
});

export const OurTeam = () => {

    return (
        <ContentOur
            width=
            {{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
            }}>
            <OurText
                width={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                }}>
                <H1
                    font={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp4': 'Desktop'
                    }}>
                    Nuestro equipo</H1>
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
            </OurText>
            <OurTeamContent
                flex={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                }}>
                <CardTeam />
                <CardTeam />
                <CardTeam />
                <CardTeam />
            </OurTeamContent>
        </ContentOur>
    )
}