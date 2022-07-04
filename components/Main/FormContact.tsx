import React, {useState} from "react";
import { styled } from "../../stitches.config";
import { formContactData, titleContactData } from "../../data/contactData";



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

// TODO: Use descriptive naming
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

export const MainFormContact = () => {

    const [datos, setDatos] = useState({
        fullName: '',
        email: '',
        asunto: '',
    });

    const handleInputChange = (event: React.ChangeEvent<any>) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const sendData = (event: React.ChangeEvent<any>) => {
        event.preventDefault()
        console.log(datos.fullName + ' ' + datos.asunto )
    }

    return(
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
            <form onSubmit={sendData} >
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
                                placeholder={text} 
                                onChange={handleInputChange} />
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
                    onChange={handleInputChange}
                    placeholder="Mensaje"  />
                <Button type="submit"
                    width={{
                        '@initial': 'Mobile',
                        '@bp2': 'Tablet',
                        '@bp3': 'Desktop'
                    }}
                >Enviar</Button>
            </form>
        </ContentForm>
    )
}
