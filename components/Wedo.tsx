import React from "react";
import generalImg from "../data/generalImg";
import Image from "next/image";
import { styled } from "../stitches.config";


const ContentWhatDo = styled('div', {
    marrgin: '1rem 0',
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

const WhatDoText = styled('div', {
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

const WhatDoImg = styled('image', {
    variants: {
        width: {
            Desktop: {
                display: 'flex',
                justifyContent: 'flex-start',
                padding: '0 5rem',
                height: 220
            },
            Tablet: {
                padding: '0 5%',
            },
            Mobile: {
                width: '50%'
            }
        }
    }
});

const H1 = styled('h1',{
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

const P = styled('p',{
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


export const Wedo = () => {

    return (
        <ContentWhatDo
        width=
        {{
            '@initial': 'Mobile',
            '@bp2': 'Tablet',
            '@bp3': 'Desktop'
        }}>
            <WhatDoText
            width={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
            }}>
                <H1
                font={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                }}>
                ¿Qué hacemos?</H1>
                <P
                 font={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                }}>
                Fundmadre tiene como propósito, asesorar, apoyar y acompañar a madres gestantes vulnerables
                     y marginadas en la ciudad de Bogotá- Colombia, contribuyendo con la defensa de la vida, 
                     para disminuir el índice de abortos, causados por la condición de pobreza, abandono y depresión.
                </P>
            </WhatDoText>
            <WhatDoImg
            width={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp4': 'Desktop'
            }}
            >
            <Image
              src={generalImg.WhatDoWeDoImg}
              alt="psicologia"
              layout='intrinsic'
              objectFit='contain'
            />
            </WhatDoImg>
        </ContentWhatDo>
    )
}