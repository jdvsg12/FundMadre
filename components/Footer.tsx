import React from 'react';
import { copyright, footer as footerData } from '../data/footer';
import { styled } from '../stitches.config';
import Image from 'next/image';



const Content = styled('div', {
  backgroundImage: 'linear-gradient(180deg, rgba(91,133,188,1) 40%, rgba(127, 179, 213,1) 100%)',
})

const ContentFooter = styled('div', {
  variants: {
    with: {
      Desktop: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0 20%',
        justifyContent: 'space-between'
      },
      Tablet: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0 10%',
        justifyContent: 'space-between'
      },
      Mobile: {
        display: 'flex',
        flexDirectione: 'column',
        gap: '2rem',
        padding: '2rem 0',
        justifyContent: 'space-between'

      }
    }
  }
})

const Line = styled('div',{
  border: 'solid 3px white'
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

const Title = styled('ul', {
  color: 'White',
  textTransform: 'uppercase',
  fontWeight: '700',
  padding: '0',
  textAlign: 'center',
  variants: {
    with: {
      Desktop: {
        fontSize: '$4',
      },
      Tablet: {
        fontSize: '$3',
      },
      Mobile: {
        fontSize: '$2',
      }
    }
  }
})

const ContentData = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  height: 25,
  gap: '0.5rem',
  margin: '1.5rem 0',
})  


const Li = styled('li', {
  listStyle: 'none',
  color: '#D4E6F1',
  variants: {
    with: {
      Desktop: {
        fontSize: '$3',
      },
      Tablet: {
        fontSize: '$2'
      },
      Mobile: {
        fontSize: '$2',
      }
    }
  }
})

const ContentCopy = styled('div', {
  color: '$white',
  padding: '2rem 1rem',
  borderTop: '0.18rem solid $white',
  margin: '0rem 3rem',
  fontWeight: '500',
  textAlign: 'center',
  variants: {
    weight: {
      Desktop: {
        fontSize: '$3'
      },
      Tablet: {
        fontSize: '$2'
      },
      Mobil: {
        fontSize: '$2'
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
              }}>
              <Title key={`${title}-${index}`}
                with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                {title}
              </Title>
              <ContentData key={`${icon2}-${index}`}>
                {icon1 ? (<Image src={icon1} alt={alt1}/>) : null}
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}
                >{item1}</Li>

              </ContentData>
              <ContentData key={`${icon2}-${index}`}>
                {icon2 ? (<Image src={icon2} alt={alt2} />) : null}
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>{item2}</Li>

              </ContentData>
              <ContentData key={`${icon2}-${index}`}>
                {icon3 ? (<Image src={icon3} alt={alt3} />) : null}
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
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