import React from "react";
import generalImg from '../../data/generalImg';
import generalIcono from "../../data/icono";
import Image from 'next/image';
import { FormEvent, MouseEvent } from 'react';
import { styled } from "../../stitches.config";



const Content = styled('div', {
    background: '$blueMain',
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
                minwidth: '100%',
                maxWidth: '1560px',
                height: '1000px',
                overflow: 'hiden',
                gridColumn: '1/4',
                gridRow: '1/3',
            },
            Tablet: {
                gridColumn: '1/2',
                gridRow: '1/4'
            },
            Mobile: {
                minwidth: '100%',
                maxWidth: '1560px',
                height: '1000px',
                overflow: 'hideen',
                gridColumn: '1/2',
                gridRow: '1/3'
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
                gridColumn: '2/4',
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

const ContentData = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
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
                fontSize: '1rem',

            }
        }
    }
})

const Button = styled('button', {
    backgroundColor: '$blueSecond',
    border: 'none',
    width: '100%',
    color: 'white',
    variants: {
        width: {
            Desktop: {
                borderRadius: '0.3rem',
                padding: '2% 3%',
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
        backgroundColor: '$blueSecond',
        boxShadow: 'inset 0rem 0rem 0.2rem Black',
    }
}
);

const H1 = styled('h1', {
    color: '$white',
    variants: {
        font: {
            Desktop: {
                fontSize: '$5',
                lineHeight: '3rem',
                borderBottom: '0.18rem solid $white',
                width: '37.5%',
            },
            Tablet: {
                fontSize: '$4',
                lineHeight: '3rem',
                borderBottom: '0.18rem solid $white',
                width: '37.5%',
            },
            Mobile: {
                fontSize: '$3',
                lineHeight: '3rem',
                borderBottom: '0.18rem solid $white',
                width: '37.5%',
            }
        }
    }
})

const P = styled('p', {
    color: '$white',
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

const Icon = styled('div', {
    marginLeft: '4rem'

})

const Legend = styled('div', {
    marginLeft: '4rem',
    color: '$white',
    marginBottom: '1.5rem',
    fontSize: '$3',
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
                    src={generalImg.BackgroundContact}
                    alt="Profile"
                    objectFit='contain'
                /></ContentImage>
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
                >Contáctanos</H1>
                <Legend>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Legend>
                <ContentData>
                    <Icon><Image
                        src={generalIcono.iconoMessage}
                        alt="psicologia"
                        layout='intrinsic'
                        objectFit='contain'
                    /></Icon><P>loremipsum@correo.com</P></ContentData>
                <ContentData>
                    <Icon><Image
                        src={generalIcono.iconPhoneNumber}
                        alt="psicologia"
                        layout='intrinsic'
                        objectFit='contain'
                    /></Icon>
                    <P font={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp3': 'Desktop'
                    }}>+54 321 123 4567</P></ContentData>
            </ContentInfo>
            <ContentForm grid={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
            }}>
                <H1>Datos</H1>
                <form>
                    <label>
                        <Input font={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop'
                        }}
                            id="name"
                            type="text"
                            name="fullName"
                            placeholder="Nombre y Apellido" required />
                    </label>
                    <label>
                        <Input font={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop'
                        }}
                            id="phoneNumber"
                            type="tel"
                            name="phoneNumber"
                            placeholder="Teléfono" required />
                    </label>
                    <label>
                        <Input font={{
                            '@initial': 'Mobile',
                            '@bp2': 'Tablet',
                            '@bp3': 'Desktop'
                        }}
                            id="Email"
                            type="email"
                            name="Email"
                            placeholder="Correo" required />
                    </label>
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