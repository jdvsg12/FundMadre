import React from 'react';
import { styled } from '../../stitches.config';
import generalImg from '../../data/generalImg';
import Image from 'next/image';


const OurTeamContent = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '0rem 3rem'
});

const CardTeamContent = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '20%',
    height: '100%',
})

const CardTeamBox = styled('div', {
    border: '0.15rem solid $pinkMain',
    padding: '5rem 1rem 1rem 1rem',
})

const H1 = styled('h1', {
    color: '$blueMain',
    fontSize: '$4',
    lineHeight: '4rem',
    borderBottom: '0.18rem solid $pinkMain',
    marginLeft: '3rem',
    width: '37.5%'
})

const H2 = styled('h2', {
    lineHeight: '0rem',
    fontSize: '$4',
    color: 'GrayText',
})

const H3 = styled('h3', {
    lineHeight: '1rem',
    color: 'GrayText',
    fontWeight: '400',
    fontStyle: 'italic',
})



const P = styled('p', {
    color: 'GrayText',
    lineHeight: '1.5rem',
    fontSize: '$2'
})

const ContentPerfilImag = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '5rem',
})

export const CardTeam = () => {

    return(

                <CardTeamContent>
                    <ContentPerfilImag>
                        <Image
                            src={generalImg.PerfilImages}
                            alt="Profile"
                            layout='intrinsic'
                            objectFit='contain'
                        /></ContentPerfilImag>
                    <CardTeamBox>
                        <H2>Name Lastname</H2>
                        <H3>Developer</H3>
                        <P>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Aliquam mattis id erat sed bibendum.
                            Fusce nec sapien ante, consectetur adipiscing elit.
                            Aliquam mattis id erat sed bibendum. Fusce nec sapien ante
                        </P>
                    </CardTeamBox>
                </CardTeamContent>
    )
}