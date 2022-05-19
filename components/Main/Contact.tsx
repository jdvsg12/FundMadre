import React from "react";
import { contactBackground, contactData, formContactData, titleContactData, ImageDonateBanks } from "../../data/contactData";
import Image from 'next/image';
import { FormEvent } from 'react';
import { styled } from "../../stitches.config";



const Content = styled('div', {
    backgroundImage: 'linear-gradient(180deg, rgba(91,133,188,1) 0%, rgba(210,210,210,1) 100%)',
    variants: {
        grid: {
            Desktop: {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(1, 1fr)',
                gridGap: '1rem',
            },
            Tablet: {
                display: 'grid',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
            },
            Mobile: {
                display: 'grid',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
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

const ContentForm = styled('form', {
    padding: '0 10% 5% 10%',
    variants: {
        grid: {
            Desktop: {
                placeSelf: 'center',
                gridColumn: '3/4',
                gridRow: '1/2',
                zIndex: '2'
            },
            Tablet: {
                gridColumn: '1/2',
                gridRow: '3/4',
                zIndex: '2'
            },
            Mobile: {
                gridColumn: '1/2',
                gridRow: '3/4',
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

const Input = styled('input', {
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    width: '100%',
    color: 'gray',
    variants: {
        font: {
            Desktop: {
                borderRadius: '0.3rem',
                padding: '2% 3%',
                fontSize: '$2',
                marginBottom: '1rem',
                marginLeft: '2rem',
            },
            Tablet: {
                borderRadius: '0.3rem',
                padding: '2% 3%',
                fontSize: '$2',
                marginBottom: '1rem',
                marginLeft: '1rem',
            },
            Mobile: {
                borderRadius: '0.3rem',
                padding: '2% 3%',
                fontSize: '$2',
                marginBottom: '1rem',
            }
        }
    }
})

const TextArea = styled('textarea', {
    border: 'none',
    width: '100%',
    color: 'gray',
    height: '20%',
    marginBottom: '1rem',
    fontFamily: 'sans-serif',
    variants: {
        width: {
            Desktop: {
                borderRadius: '0.3rem',
                padding: '1rem 1rem',
                fontSize: '1rem',
                marginLeft: '2rem',
            },
            Tablet: {
                borderRadius: '0.3rem',
                padding: '1rem 1rem',
                fontSize: '1rem',
                marginLeft: '1rem',
            },
            Mobile: {
                borderRadius: '0.3rem',
                padding: '1rem 1rem',

            }
        }
    }
})

const Button = styled('button', {
    background: '#FDEDEC',
    border: 'solid',
    width: '100%',
    color: '#CD6155',
    transition: 'all 0.3s ease 0s',
    variants: {
        width: {
            Desktop: {
                borderRadius: '1rem',
                padding: '3% 3%',
                fontSize: '1rem',
                marginLeft: '2rem',
            },
            Tablet: {
                borderRadius: '0.3rem',
                padding: '2% 3%',
                fontSize: '1rem',
                marginLeft: '1rem',
            },
            Mobile: {
                borderRadius: '0.3rem',
                padding: '2% 3%',
                fontSize: '1rem',

            }
        }
    },
    '&:hover': {
        background: '#FDEDEC',
        boxShadow: '0px 5px 10px #B03A2E',
        color: '#CD6155',
        transform: 'translateY(-3px)'
    }
}
);

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

const ContentImageDonta = styled('div', {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
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
    width: '18rem',
})


export const MainForm = () => {

    const registerUser = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // don't redirect the page
        // where we'll add our form logic
    };



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
                                objectFit='contain'
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
                            />
                            <P>{text}</P>
                        </ImageDonte>
                    )
                })}
            </ContentImageDonta>
            <ContentForm grid={{
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
                >{titleContactData[1].title}</H1>
                <form>
                    {formContactData.map(({ type, text, name }, index) => {

                        return (
                            <label key={`${type}-${index}`}>
                                <Input font={{
                                    '@initial': 'Mobile',
                                    '@bp2': 'Tablet',
                                    '@bp3': 'Desktop'
                                }}
                                    type={type}
                                    name={name}
                                    placeholder={text} required />
                            </label>

                        )
                    })}

                    <TextArea width={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp3': 'Desktop'
                    }}

                        id="message"
                        name="message"
                        placeholder="Mensaje" required />
                    <Button
                        width={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop'
                        }}
                    >Enviar</Button>
                </form>
            </ContentForm>
        </Content>
    );
}