import React from "react";
import { styled } from "@stitches/react";
import { CardOrWork } from "./Main/CardOrWork";

const ContentWork = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '2rem 0rem 0rem 0rem'
});

const WorkText = styled('div', {
    height: '30%',
    margin: '0rem 1em'

});

const WorkContent = styled('div', {
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


export const OurWork = () => {

    return (
        <ContentWork>
            <WorkText>
                <H1>Nuestro trabajo</H1>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis id erat sed bibendum.
                     Fusce nec sapien ante, consectetur adipiscing elit. Aliquam mattis id erat sed bibendum. 
                     Fusce nec sapien ante
                </P>
            </WorkText>
            <WorkContent>
                <CardOrWork/>
            </WorkContent>
        </ContentWork>
    )
}