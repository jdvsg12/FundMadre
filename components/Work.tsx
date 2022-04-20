import React from "react";
import { styled } from "../stitches.config";
import { CardOrWork } from "./Main/CardOrWork";

const ContentWork = styled('div', {
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

const WorkText = styled('div', {
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

const WorkContent = styled('div', {
    variants: {
        flex: {
            Desktop: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '3rem',
            },
            Tablet: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
            },
            Mobile: {
                display: 'flex',
                flexWrap: 'wrap',
                paddingBottom: '2rem',
                justifyContent: 'center',
                gap: '1rem'
            }
        }
    }
});

export const OurWork = () => {

    return (
        <ContentWork
            width=
            {{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
            }}
        >
            <WorkText
                width={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                }}>
                <H1 font={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp4': 'Desktop'
                }}>
                Nuestro trabajo</H1>
                <P font={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp4': 'Desktop'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis id erat sed bibendum.
                    Fusce nec sapien ante, consectetur adipiscing elit. Aliquam mattis id erat sed bibendum.
                    Fusce nec sapien ante
                </P>
            </WorkText>
            <WorkContent
                 flex={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                }}>
                <CardOrWork />
                <CardOrWork />
                <CardOrWork />
                <CardOrWork />

            </WorkContent>
        </ContentWork>
    )
}