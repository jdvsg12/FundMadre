import React from "react";
import { contactBackground, contactData, titleContactData, ImageDonateBanks } from "../../data/contactData";
import Image from 'next/image';
import { MainFormContact } from "../Main/FormContact"
import { styled } from "../../stitches.config";



const Content = styled('div', {
    backgroundImage: 'linear-gradient(180deg, rgba(91,133,188,1) 0%, rgba(210,210,210,1) 100%)',
    variants: {
        grid: {
            Desktop: {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(1, 1fr)',
                gridGap: '1rem',
            },
            Tablet: {
                display: 'grid',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
            },
            Mobile: {
                display: 'grid',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
            }
        }
    }
})

const ContentImage = styled('div', {
    variants: {
        grid: {
            Desktop: {
                position: 'relative',
                height: '600px',
                overflow: 'hiden',
                gridColumn: '1/5',
                gridRow: '1/3',
            },
            Tablet: {
                position: 'relative',
                height: '1070px',
                gridColumn: '1/2',
                gridRow: '1/4'
            },
            Mobile: {
                position: 'relative',
                height: '1070px',
                overflow: 'hideen',
                gridColumn: '1/2',
                gridRow: '1/4'
            }
        }
    }
})

const ContentInfo = styled('div', {
    variants: {
        grid: {
            Desktop: {
                placeSelf: 'center',
                gridColumn: '1/2',
                gridRow: '1/2',
                zIndex: '2'
            },
            Tablet: {
                placeSelf: 'center',
                gridColumn: '1/2',
                gridRow: '1/2',
                zIndex: '2'

            },
            Mobile: {
                padding: '1rem',
                placeSelf: 'center',
                gridColumn: '1/2',
                gridRow: '1/2',
                zIndex: '2'

            }
        }
    }
})

const ContentData = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',
    zIndex: '2',

})

const H1 = styled('h1', {
    color: '$white',
    variants: {
        font: {
            Desktop: {
                fontSize: '$5',
            },
            Tablet: {
                fontSize: '$4',
            },
            Mobile: {
                fontSize: '$4',
            }
        }
    }
})

// avoid this naming because "P" is not descriptive
const P = styled('p', {
    color: '$white',
    fontWeight: '500',
    variants: {
        font: {
            Desktop: {
                lineHeight: '1.5rem',
                fontSize: '$3',
            },
            Tablet: {
                lineHeight: '1.5rem',
                fontSize: '$2',
            },
            Mobile: {
                lineHeight: '1.5rem',
                fontSize: '$2',
            }
        }
    }
})
const DonateText = styled('p', {
    color: '$white',
    fontWeight: '500',
    marginTop: '-0.5rem',
    variants: {
        font: {
            Desktop: {
                lineHeight: '1.5rem',
                fontSize: '$3',
            },
            Tablet: {
                lineHeight: '1.5rem',
                fontSize: '$2',
            },
            Mobile: {
                lineHeight: '1.5rem',
                fontSize: '$2',
            }
        }
    }
})

const ContentImageDonta = styled('div', {
    background: 'rgba(250, 219, 216, 0.50)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(0.1px)',
    borderRadius: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.76)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.5rem',
    variants: {
        grid: {
            Desktop: {
                placeSelf: 'center',
                gridColumn: '2/3',
                gridRow: '1/2',
                zIndex: '2'
            },
            Tablet: {
                gridColumn: '1/2',
                gridRow: '2/3',
                zIndex: '2'
            },
            Mobile: {
                gridColumn: '1/2',
                gridRow: '2/3',
                zIndex: '2'
            }
        }
    }
})

const ImageDonte = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '18rem',
})


export const Contact = () => {
   
    return (
        <Content grid={{
            '@initial': 'Mobile',
            '@bp2': 'Tablet',
            '@bp3': 'Desktop'
        }}>
            <ContentImage grid={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
            }}>
                <Image
                    src={contactBackground.image}
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                />
            </ContentImage>
            <ContentInfo grid={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
            }}>
                <H1 font={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                }}
                >{titleContactData[0].title}</H1>

                {contactData.map(({ icon, data }, index) => {
                    return (
                        <ContentData key={`${icon}-${index}`}>
                            <Image
                                src={icon}
                                alt="psicologia"
                                layout='intrinsic'
                                objectFit='cover'
                                width={40}
                                height={40}
                            /><P>{data}</P></ContentData>
                    )
                })}
            </ContentInfo>
            <ContentImageDonta
                grid={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                }}>
                <H1
                    font={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp3': 'Desktop'
                    }}
                >{titleContactData[2].title}</H1>
                {ImageDonateBanks.map(({ image, text }, index) => {
                    return (
                        <ImageDonte key={`${image}-${index}`}>
                            <Image
                                src={image}
                                alt='donate'
                                layout='intrinsic'
                                objectFit='contain'
                                width='150px'
                            />
                            <DonateText>{text}</DonateText>
                        </ImageDonte>
                    )
                })}
            </ContentImageDonta>
          {/* <MainFormContact /> */}
        </Content>
    );
}