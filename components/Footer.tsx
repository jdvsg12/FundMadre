import React from 'react';
import { copyright, footerData, footerSocial, footerWe } from '../data/footer';
import { styled } from '../stitches.config';
import Image from 'next/image';

const Footer = styled('div', {
  backgroundImage: 'linear-gradient(180deg, rgba(91,133,188,1) 40%, rgba(127, 179, 213,1) 100%)',
})

const Content = styled('div', {
  variants: {
    flex: {
      Desktop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '0 5%',
      },
      Tablet: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0 5%',
      },
      Mobile: {
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
      }
    }
  }

})

const ContentFooter = styled('div', {
  variants: {
    with: {
      Desktop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '35rem',
      },
      Tablet: {
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
        width: '18rem',
      },
      Mobile: {
        display: 'flex',
        flexDirection: 'column-reverse',
      }
    }
  }
})

const ContentContact = styled('div', {
  variants: {
    width: {
      Desktop: {
        lineHeight: 1,
      },
      Tablet: {
        lineHeight: 1,
      },
      Mobile: {
        lineHeight: 1,
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

const ContentInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0. 5rem',
  margin: '1rem 0',
})

const ContentData = styled('div', {
  variants: {
    with: {
      Desktop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

      },
      Tablet: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      Mobile: {
        display: 'none',
      }
    }
  }
})

const ContentFollow = styled('div', {
  variants: {
    direction: {
      Desktop: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
        margin: '1rem 0',
      },
      Tablet: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '0.5rem',
        margin: '1rem 0',
      },
      Mobile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '0.5rem',
        margin: '1rem 0',
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
        height: 35,
        gap: 20,
        fontSize: '$3',
      },
      Tablet: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        height: 35,
        gap: 15,
        fontSize: '$2'
      },
      Mobile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'break-spaces',
        height:40,
        gap: 20,
        fontSize: '$2',
      },
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

const P = styled('p', {
  variants: {
    size :{
      Desktop :{
        width: '20rem'
      },
      Tablet :{
        width: '15rem'
      },
      Mobile : {
        width: '15rem'
      }
    }
  }
})
export const FooterColumns = () => {

  return (
    <Footer>
      <Content
        flex={{
          '@initial': 'Mobile',
          '@bp2': 'Tablet',
          '@bp3': 'Desktop'
        }}>
        {FooterData()}
        {FooterSocial()}
        {FooterWe()}
      </Content>
      <ContentCopy>{copyright[0].text}
      </ContentCopy>
    </Footer>
  )

  function FooterData() {
    return <ContentFooter
      with={{
        '@initial': 'Mobile',
        '@bp2': 'Tablet',
        '@bp3': 'Desktop'
      }}>
      {footerData.map(({ title, items }, index) => {
        return (
          <ContentContact key={`${title}-${index}`}
            width={{
              '@initial': 'Mobile',
              '@bp2': 'Tablet',
              '@bp3': 'Desktop'
            }}>
            <Title
              with={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
              }}>
              {title}
            </Title>
            <ContentInfo>
              {items.map((item) => {
                return (
                  <Li key={`${items}-${index}`}
                    with={{
                      '@initial': 'Mobile',
                      '@bp2': 'Tablet',
                      '@bp3': 'Desktop'
                    }}
                  >
                    {item?.icon ? (<Image src={item.icon} />) : null}
                    <P size={{
                      '@initial': 'Mobile',
                      '@bp2': 'Tablet',
                      '@bp3': 'Desktop'
                    }}>{item.item}</P>
                  </Li>);
              })}
            </ContentInfo>
          </ContentContact>
        );
      })}
    </ContentFooter>;
  }
  function FooterSocial() {
    return <ContentFooter
      with={{
        '@initial': 'Mobile',
        '@bp2': 'Tablet',
        '@bp3': 'Desktop'
      }}>
      {footerSocial.map(({ title, items }, index) => {
        return (
          <ContentContact key={`${title}-${index}`}
            width={{
              '@initial': 'Mobile',
              '@bp2': 'Tablet',
              '@bp3': 'Desktop'
            }}>
            <Title
              with={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
              }}>
              {title}
            </Title>
            <ContentFollow 
              direction={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
              }}>
              {items.map((item) => {
                return (
                  <Li key={`${items}-${index}`}
                  ><a target='_blank' rel="noreferrer" href={item.href}>
                    {item?.icon ? (<Image src={item.icon} height={40} width={50} />) : null}
                    {item.item}
                  </a></Li>);
              })}
            </ContentFollow>
          </ContentContact>
        );
      })}
    </ContentFooter>;
  }
  function FooterWe() {
    return <ContentData
      with={{
        '@initial': 'Mobile',
        '@bp2': 'Tablet',
        '@bp3': 'Desktop'
      }}>
      {footerWe.map(({ title, items }, index) => {
        return (
          <ContentContact key={`${title}-${index}`}
            width={{
              '@initial': 'Mobile',
              '@bp2': 'Tablet',
              '@bp3': 'Desktop'
            }}>
            <Title
              with={{
                '@initial': 'Mobile',
                '@bp2': 'Tablet',
                '@bp3': 'Desktop'
              }}>
              {title}
            </Title>
            <ContentInfo>
              {items.map((item) => {
                return (
                  <Li  key={`${items}-${index}`}
                    with={{
                      '@initial': 'Mobile',
                      '@bp2': 'Tablet',
                      '@bp3': 'Desktop'
                    }}
                  ><a target='_blank' rel="noreferrer" href={item.href}>
                      {item?.icon ? (<Image src={item.icon} />) : null}
                      {item.item}
                    </a></Li>);
              })}
            </ContentInfo>
          </ContentContact>
        );
      })}
    </ContentData>;
  }
}