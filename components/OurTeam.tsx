import React from 'react';
import { styled } from '../stitches.config';
import { CardTeam } from './Main/CardTeam';

const ContentOur = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '2rem 0rem 0rem 0rem'
});

const OurText = styled('div', {
    height: '30%',
    margin: '0rem 1em'

});

const OurTeamContent = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: '3rem',
    marginBottom: '3rem'
});

const P = styled('p', {
    color: 'GrayText',
    paddingLeft: '4rem',
    paddingTop: '1rem',
    margin: '0rem 3rem',
    lineHeight: '1.5rem',
    fontSize: '$3'
})

const H1 = styled('h1', {
    color: '$blueMain',
    fontSize: '$5',
    lineHeight: '4rem',
    borderBottom: '0.18rem solid $pinkMain',
    marginLeft: '4rem',
    width: '37.5%'
})


export const OurTeam = () => {

    return (
        <ContentOur>
            <OurText>
                <H1>Nuestro equipo</H1>
                <P>La Fundación Vida madre de nuevas generaciones (Fundmadre),
                    entidad sin ánimo de Lucro nace para mejorar la calidad de vida de mujeres gestantes
                    vulnerables en Bogotá y las periferias. a través de su modelo de acompañamiento en Psicosocial,
                    en Enfermería, en emprendimiento y en Espiritualidad y valores, busca fracturar los siclos de
                    pobreza generados por el desplazamiento, la migración, el abandono y la falta de oportunidades.
                </P>
            </OurText>
            <OurTeamContent>
                <CardTeam/>
                <CardTeam/>
                <CardTeam/>
                <CardTeam/>
            </OurTeamContent>
        </ContentOur>
    )
}