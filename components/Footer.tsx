import React from 'react';
import { copyright, footer as footerData } from '../data/footer';
import { styled } from '../stitches.config';
import Image from 'next/image';



const Content = styled('div', {
  backgroundColor: '$blueMain',
})

const ContentFooter = styled('div', {
  variants: {
    with: {
      Desktop: {
        display: 'flex',
        flexDirection: 'row',
        gap: 0,
        padding: '0 3%',
        justifyContent: 'space-between'
      },
      Tablet: {
        display: 'flex',
        flexDirection: 'row',
        gap: 0,
        padding: '0 3%',
        justifyContent: 'space-between'
      },
      Mobile: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        padding: '0 3%',
        justifyContent: 'center'
      }
    }
  }
})

const ContentContact = styled('div', {
  variants: {
    width: {
      Desktop: {
        lineHeight: 1

      },
      Tablet: {
        lineHeight: 1

      },
      Mobile: {
        lineHeight: 1
      }
    }
  }

})

const ContentData = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '1rem',
  margin: '1rem 0rem',
})

const TextUl = styled('ul', {
  borderBottom: '0.15rem solid white',
  color: 'White',
  lineHeight: '2rem',
  textAlign: 'center',
  padding: '0rem 2rem',
  variants: {
    with: {
      Desktop: {
        fontSize: '$4',
        fontWeight: '600'
      },
      Tablet: {
        fontSize: '$3',
        fontWeight: '600'
      },
      Mobile: {
        fontSize: '$3',
        fontWeight: '600'
      }
    }
  }
})

const Li = styled('li', {
  display: 'flex',
  flex: 'row',
  listStyle: 'none',
  color: '$white',
  lineHeight: '1.8rem',
  variants: {
    with: {
      Desktop: {
        fontSize: '$3',
      },
      Tablet: {
        fontSize: '$3'
      },
      Mobile: {
        fontSize: '$3'
      }
    }
  }
})

const ContentCopy = styled('div', {
  backgroundColor: '$blueMain',
  textAlign: 'center',
  color: '$white',
  padding: '2rem 1rem',
  borderTop: '0.18rem solid $white',
  margin: '0rem 3rem',
  fontWeight: '500',
  variants:{
    weight:{
      Desktop:{
        fontSize: '$3'
      },
      Tablet:{
        fontSize: '$2'
      },
      Mobil:{
        fontSize: '$1'
      }
    }
  }
})

export const FooterColumns = () => {



  return (
    <Content>
      <ContentFooter
        with={{
          '@initial': 'Mobile',
          '@bp2': 'Tablet',
          '@bp3': 'Desktop'
        }}>
        {footerData.map(({ title, item1, item2, item3, icon1, icon2, icon3, alt1, alt2, alt3 }, index) => {
          return (
            <ContentContact
              width={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
              }}
              key={`${title}-${index}`}>
              <TextUl
                with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}
                key={`${title}-${index}`}>
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
                <Li
                  with={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                  }} key={`${item2}-${index}`}>{item2}</Li>
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
          <ContentCopy
          weight={{
            '@initial': 'Mobil',
            '@bp2': 'Tablet',
            '@bp3': 'Desktop'
        }}
          key={`${text}-${index}`}>
            {text}
          </ContentCopy>)
      })}

    </Content>

  )
}