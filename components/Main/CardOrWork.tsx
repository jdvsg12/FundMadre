import React from 'react';
import { styled } from '../../stitches.config';
import generalImg from '../../data/generalImg';
import Image from 'next/image';



const CardWorkContent = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '20%',
    height: '100%',
})

const CardWorkBox = styled('div', {
    border: '0.15rem solid $pinkMain',
    padding: '5rem 1rem 1rem 1rem',
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



const Ul = styled('p', {
    color: 'GrayText',
    lineHeight: '1.5rem',
    fontSize: '$2'
})

const ContentWorkImag = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',   
    top: '5rem',
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
                            <li>Adipiscing elit. Aliquam mattis id erat sed bibendum.</li>
                            <li>Fusce nec sapien ante, consectetur adipiscing elit.</li>
                            <li>Aliquam mattis id erat sed bibendum. Fusce nec sapien ante</li>
                        </Ul>
                    </CardWorkBox>
                </CardWorkContent>
    )
}
