import React from 'react';
import { copyright, footer as footerData } from '../data/footer';
import { styled } from '../stitches.config';
import Image from 'next/image';



const Content = styled('div', {
  backgroundColor: '$blueMain',
})

const ContentFooter = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '4rem',
  paddingBottom: '2rem',
  justifyContent: 'center'
})

const ContentContact = styled('div', {
  width: '50%',
  marginLeft: '5rem',
  marginRight: '3.2rem'

})

const TextUl = styled('ul', {
  fontSize: '$4',
  borderBottom: '0.15rem solid white',
  color: 'White',
  lineHeight: '2rem',
  marginLeft: '-2rem',
  marginBottom: '1rem',
  fontWeight: '600',
  paddingBottom: '0.5rem'
})

const ContentData = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
  margin: '1rem 0rem'
})

const Li = styled('li', {
  display: 'flex',
  flex: 'row',
  listStyle: 'none',
  color: '$white',
  lineHeight: '1.8rem',
  fontSize: '$3',
})

const ContentCopy = styled('div', {
  backgroundColor: '$blueMain',
  textAlign: 'center',
  color: '$white',
  fontSize: '1rem',
  padding: '2rem 1rem',
  borderTop: '0.18rem solid $white',
  margin: '0rem 3rem',
  fontWeight: '500'
})

export const FooterColumns = () => {



  return (
    <Content>
      <ContentFooter>
        {footerData.map(({ title, item1, item2, item3, icon1, icon2, icon3, alt1, alt2, alt3 }, index) => {
          return (
            <ContentContact>
              <TextUl key={`${title}-${index}`}>
                {title}
              </TextUl>
              <ContentData>
                {icon1
                  ? (
                    <Image
                      src={icon1}
                      alt={alt1}
                    />
                  )
                  : null
                }
                <Li>{item1}</Li>
              </ContentData>
              <ContentData>
                {icon2
                  ? (
                    <Image key={`${icon2}-${index}`}
                      src={icon2}
                      alt={alt2}
                    />
                  )
                  : null
                }
                <Li key={`${item2}-${index}`}>{item2}</Li>
              </ContentData>
              <ContentData>
                {icon3
                  ? (
                    <Image key={`${icon2}-${index}`}
                      src={icon3}
                      alt={alt3}
                    />
                  )
                  : null
                }
                <Li key={`${item3}-${index}`}>
                  {item3}
                </Li>
              </ContentData>
            </ContentContact>
          )
        })}

      </ContentFooter>
      {copyright.map(({ text }, index) => {
        return (
          <ContentCopy key={`${text}-${index}`}>
            {text}
          </ContentCopy>)
      })}

    </Content>

  )
}