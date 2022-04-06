import React from "react";
import { styled } from "@stitches/react";
import generalImg from '../../data/generalImg';
import generalIcono from "../../data/icono";
import Image from 'next/image';
import { FormEvent, MouseEvent } from 'react';
import { PaddingIcon } from "@radix-ui/react-icons";


const ContenImages = styled('div', {
    position: 'absolute',
    justifyContent: 'center',
    overflow: 'hidden',
    gap: '1rem',
    zIndex: '1',
})

const ContentInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    zIndex: '2',
    marginLeft: '3rem',
    paddingTop: '3rem'
})

const GeneralContent = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    zIndex: '2',
    marginBottom: '5.2rem'
})

const ContentData = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
    zIndex: '2',

})

const ContentForm = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    zIndex: '3',
    paddingTop: '3rem'

})

const Input = styled('input', {
    border: 'none',
    borderRadius: '0.3rem',
    padding: '1rem 1rem',
    color: 'gray',
    fontSize: '1rem',
    width: '70%',
    marginBottom: '1rem',
    marginLeft: '4rem'
})

const TextArea = styled('textarea',{
    border: 'none',
    borderRadius: '0.3rem',
    padding: '1rem 1rem',
    color: 'gray',
    fontSize: '1rem',
    width: '70%',
    height: '10rem',
    marginBottom: '1rem',
    fontFamily: 'sans-serif',
    marginLeft: '4rem'
})

const Button = styled('button', {
    backgroundColor: '$blueSecond',
    border: 'none',
    borderRadius: '0.3rem',
    padding: '1rem 1rem',
    color: 'white',
    width: '70%',
    textAlign: 'left',
    fontSize: '1rem',
    marginLeft: '4rem',
    '&:hover': {
        backgroundColor: '$blueSecond',
        boxShadow: 'inset 0rem 0rem 0.2rem Black',
        color: 'white',
        marginLeft: '4rem',
    }
});

const H1 = styled('h1', {
    color: '$white',
    fontSize: '$5',
    lineHeight: '3rem',
    borderBottom: '0.18rem solid $white',
    width: '37.5%',
    marginLeft: '4rem'
})

const P = styled('p', {
    color: '$white',
    lineHeight: '1.5rem',
    fontSize: '$3',

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
        <GeneralContent>
            <ContenImages>
                <Image
                    src={generalImg.BackgroundContact}
                    alt="Profile"
                    layout='intrinsic'
                    objectFit='contain'
                />
            </ContenImages>
            <ContentInfo>
                <H1>Contáctanos</H1>
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
                    <P>+54 321 123 4567</P></ContentData>
            </ContentInfo>
            <ContentForm>
                <H1>Datos</H1>
                <Input id="name"
                    type="text"
                    name="fullName"
                    placeholder="Nombre y Apellido" required />
                    <Input id="phoneNumber"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Teléfono" required />
                    <Input id="Email"
                    type="email"
                    name="Email"
                    placeholder="Correo" required />
                    <TextArea id="message"
                    name="message"
                    placeholder="Mensaje" required />
                    <Button>Enviar</Button>
            </ContentForm>
        </GeneralContent >

    );
}