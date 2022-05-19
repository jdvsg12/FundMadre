import Image from "next/image";
import { styled } from "../stitches.config";
import generalData from "../data/general";
import { header } from "../data/header";
import Link from "next/link";
import { DonateVoluntary } from "../components/Main/DonateVoluntary"
import { DropdownMenuDemo } from "../components/Main/DropDownMenu"

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  background: '$White',
  marginBottom: '0.37rem',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  variants: {
    width: {
      Desktop: {
        paddingX: '3rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.38rem',
      },
      Tablet: {
        paddingX: '1rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.38rem',
      },
      Mobile: {
        paddingX: '1rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.38rem',
      }
    }
  }
});

const LogoContainer = styled('div', {
  variants: {
    width: {
      Desktop: {
        width: '150px',
      },
      Tablet: {
        width: '100px',
      },
      Mobile: {
        width: '100px',
      }
    }
  }
})

const RightMenuContainer = styled('div', {
  flexWithDirection: 'row',
  gap: '2.7rem',
  color: '$blueMain',
});

const ContentDropdown = styled('div', {
  variants: {
    hidden: {
      Desktop: {
        display: 'none',
      },
      Tablet: {
        display: 'flex',
        flexWithDirection: 'row',
        alignItems: 'center',
        gap: '3.5rem',
        color: '$blueMain',
      },
      Mobile: {
        display: 'flex',
        flexWithDirection: 'row',
        alignItems: 'center',
        gap: '3.5rem',
        color: '$blueMain',
      }
    }
  }
});

const LinksAndLangContainer = styled('div', {
  variants: {
    hidden: {
      Desktop: {
        display: 'flex',
        flexWithDirection: 'row',
        alignItems: 'center',
        gap: '3.5rem',
        color: '$blueMain',
      },
      Tablet: {
        display: 'none',
      },
      Mobile: {
        display: 'none'
      }
    }
  }
});

const LinksContainer = styled('div', {
  flexWithDirection: 'row',
  gap: '6.13rem',
  color: '$blueMain',
  fontWeight: 'bold',
  height: 'fit-content'

});

const A = styled('a',{
  transition: 'all 0.3s ease 0s',
  '&:hover': {
    textShadow: '0px 15px 20px $blueSecond',
    color: '$blueSecond',
    transform: 'translateY(-3px)',
    cursor: 'pointer',
  }

})

export const Header = () => {

  return (
    <Container 
    width={{
      '@initial': 'Mobile',
      '@bp2': 'Tablet',
      '@bp3': 'Desktop'
    }}>
      <LogoContainer
        width={{
          '@initial': 'Mobile',
          '@bp2': 'Tablet',
          '@bp3': 'Desktop'
        }}>
        <a href="home">
          <Image
            src={generalData.fundmadreLogoName}
            alt="Fundmadre logo"
            layout='intrinsic'
            objectFit='contain'
          /></a>
      </LogoContainer>
      <RightMenuContainer>
        <ContentDropdown
          hidden={{
            '@initial': 'Mobile',
            '@bp2': 'Tablet',
            '@bp3': 'Desktop'
          }}>
          {/* <Menu /> */}
          <DropdownMenuDemo />
        </ContentDropdown>
        <LinksAndLangContainer
          hidden={{
            '@initial': 'Mobile',
            '@bp2': 'Tablet',
            '@bp3': 'Desktop'
          }}>
          <LinksContainer>
            {header.links.map(({ href, text }, index) => (
              <Link key={`${text}-${index}`} href={href}>
                <A>{text}</A>
              </Link>
            ))}

          </LinksContainer>
        </LinksAndLangContainer>
      </RightMenuContainer>
      {/* <DonateVoluntary/> */}
    </Container>
  )
}