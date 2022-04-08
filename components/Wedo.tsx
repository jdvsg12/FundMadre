import React from "react";
import { styled } from "@stitches/react";
import generalImg from "../data/generalImg";
import Image from "next/image";
import { CardOrWork } from "./Main/CardOrWork";


const ContentWhatDo = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flex: 'fit-content',
    width: '100%',
    gap: '5rem',
    margin: '2rem 0rem 0rem 0rem',
    marginTop: '7rem',
});

const WhatDoText = styled('div', {
    width: '50%',
    padding: '0 4rem 0rem 5rem', 
    marginTop: '-2rem'
});

const WhatDoImg = styled('image', {
    width: '50%',
    paddingRight: '10rem',
});

const H1 = styled('h1',{
    color: '$blueMain',
    fontSize: '$5',
    lineHeight: '4rem',
    borderBottom: '0.18rem solid $pinkMain'
})

const P = styled('p',{
    color: 'GrayText',
    paddingLeft: '4rem',
    paddingTop:'1rem',
    lineHeight: '1.5rem',
    fontSize: '$3'
})

export const Wedo = () => {

    return (
        <ContentWhatDo>
            <WhatDoText>
                <H1>¿Qué hacemos?</H1>
                <P>Fundmadre tiene como propósito, asesorar, apoyar y acompañar a madres gestantes vulnerables
                     y marginadas en la ciudad de Bogotá- Colombia, contribuyendo con la defensa de la vida, 
                     para disminuir el índice de abortos, causados por la condición de pobreza, abandono y depresión.
                </P>
            </WhatDoText>
            <WhatDoImg>
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