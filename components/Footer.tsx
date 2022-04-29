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
        flexWrap: 'wrap-reverse',
        padding: '0 10%',
        justifyContent: 'center',
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

const ContentUbication = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 1rem',
  gap: '0.5rem',
  margin: '1rem 0',
})

const ContentData = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 1rem',
  gap: '0.5rem',
  margin: '1rem 0',
})

const ContentFollow = styled('div', {
  variants: {
    buttom: {
      Desktop: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 1rem',
        gap: '1rem',
        margin: '1rem 0',
      },
      Tablet: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 1rem',
        gap: '0.5rem',
        margin: '1rem 0',
      },
      Mobile: {
        display: 'none',
      }
    }
  }
})

const ContentFollowMobile = styled('div', {
  variants: {
    buttom: {
      Desktop: {
        display: 'none',
      },
      Tablet: {
        display: 'none',
      },
      Mobile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '1rem',
        margin: '1.5rem 0',
      }
    }
  }
})


const Li = styled('li', {
  listStyle: 'none',
  color: '#D4E6F1',
  variants: {
    with: {
      Desktop: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        height: 30,
        gap: 10,
        fontSize: '$3',
      },
      Tablet: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        height: 30,
        gap: 10,
        fontSize: '$2'
      },
      Mobile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        height: 30,
        gap: 10,
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
        {footerData.DataContact.map(({ title, item1, item2, item3, icon1, icon2, icon3, alt1, alt2, alt3 }, index) => {
          return (
            <ContentContact key={`${item1}-${index}`}
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
              <ContentUbication key={`${item1}-${index}`}>
                <Li
                  with={{
                    '@initial': 'Mobile',
                    '@bp2': 'Tablet',
                    '@bp3': 'Desktop'
                  }}>
                  {icon1 ? (<Image src={icon1} alt={alt1} />) : null}
                  {item1}</Li>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  {icon2 ? (<Image src={icon2} alt={alt2} />) : null}
                  {item2}</Li>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  {icon3 ? (<Image src={icon3} alt={alt3} />) : null}
                  {item3}</Li>
              </ContentUbication>
            </ContentContact>
          )
        })}
        {footerData.DataNosotros.map(({ title, item1, item2, item3, href1, href2, href3 }, index) => {
          return (
            <ContentContact key={`${item1}-${index}`}
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
              <ContentData key={`${item1}-${index}`}>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  <a href={href1}>{item1}</a></Li>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  <a href={href2}>{item2}</a></Li>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  <a href={href3}>{item3}</a></Li>
              </ContentData>
            </ContentContact>
          )
        })}
        {footerData.DataSocial.map(({ title, item1, item2, item3, icon1, icon2, icon3, alt1, alt2, alt3, href1, href2, href3 }, index) => {
          return (
            <ContentContact key={`${item1}-${index}`}
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
              <ContentFollow key={`${item1}-${index}`}
              buttom={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
              }}>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  {icon1 ? (<Image src={icon1} alt={alt1} />) : null}
                  <a href={href1}>{item1}</a></Li>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  {icon2 ? (<Image src={icon2} alt={alt2} />) : null}
                  <a href={href2}>{item2}</a></Li>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  {icon3 ? (<Image src={icon3} alt={alt3} />) : null}
                  <a href={href3}>{item3}</a></Li>
              </ContentFollow>
              <ContentFollowMobile key={`${item1}-${index}`}
              buttom={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
              }}>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  <a href={href1}> {icon1 ? (<Image src={icon1} alt={alt1} />) : null} </a>
                </Li>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  <a href={href2}> {icon2 ? (<Image src={icon2} alt={alt2} />) : null} </a>
                </Li>
                <Li with={{
                  '@initial': 'Mobile',
                  '@bp2': 'Tablet',
                  '@bp3': 'Desktop'
                }}>
                  <a href={href3}> {icon3 ? (<Image src={icon3} alt={alt3} />) : null} </a>
                </Li>
              </ContentFollowMobile>
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