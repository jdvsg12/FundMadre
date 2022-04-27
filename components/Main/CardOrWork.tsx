import React from 'react';
import { styled } from '../../stitches.config';
import generalImg from '../../data/generalImg';
import Image from 'next/image';



const CardWorkContent = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '20rem',
    height: '100%',
})

const CardWorkBox = styled('div', {
    border: '0.15rem solid $pinkMain',
    padding: '5rem 0 0 1rem',
})

const H2 = styled('h2', {
    lineHeight: '0rem',
    fontSize: '$4',
    color: 'GrayText',
})

const Ul = styled('p', {
    color: 'GrayText',
    lineHeight: '1.5rem',
    fontSize: '$2'
})

const Li = styled('li',{
    margin: '0 1.5rem '
})
const ContentWorkImag = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',   
    top: '4rem',
    margin: '1rem',
    overflow: 'hidden',
    borderRadius: '0.5rem',
})

export const CardOrWork = () => {

    return(

                <CardWorkContent>
                    <ContentWorkImag>
                        <Image
                            src={generalImg.OrWorkAccompaniment}
                            alt="Profile"
                            layout='intrinsic'
                            objectFit='contain'
                        /></ContentWorkImag>
                    <CardWorkBox>
                        <H2>Work</H2>
                        <Ul>
                            <Li>Adipiscing elit. Aliquam mattis id erat sed bibendum.</Li>
                            <Li>Fusce nec sapien ante, consectetur adipiscing elit.</Li>
                            <Li>Aliquam mattis id erat sed bibendum. Fusce nec sapien ante</Li>
                        </Ul>
                    </CardWorkBox>
                </CardWorkContent>
    )
}
