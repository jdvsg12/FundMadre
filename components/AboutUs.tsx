import React from 'react';
import { styled } from '../stitches.config';
import generalImg from '../data/generalImg';
import Image from 'next/image';
import { Colaborate } from './Main/Colaborate';


const ContentAbout = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: '5rem',
    margin: '2rem 0rem 0rem 0rem'
});

const AboutText = styled('div', {
    width: '50%',
    marginTop: '2rem',
    padding: '0 4rem 0rem 5rem',
    
});

const AboutImg = styled('image', {
    width: '50%',
    margin: '2rem',
    paddingRight: '10rem'
});

const Title = styled('h1',{
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

export const AbouteUs = () => {

    return (
        <ContentAbout>
            <AboutText>
                <Title>¿Quiénes somos?</Title>
                <P>La Fundación Vida madre de nuevas generaciones (Fundmadre),
                    entidad sin ánimo de Lucro nace para mejorar la calidad de vida de mujeres gestantes
                    vulnerables en Bogotá y las periferias. a través de su modelo de acompañamiento en Psicosocial,
                    en Enfermería, en emprendimiento y en Espiritualidad y valores, busca fracturar los siclos de
                    pobreza generados por el desplazamiento, la migración, el abandono y la falta de oportunidades.
                </P>
            </AboutText>
            <AboutImg>
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