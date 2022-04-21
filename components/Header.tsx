import Image from "next/image";
import { styled } from "../stitches.config";
import generalData from "../data/general";
import { header } from "../data/header";
import Link from "next/link";
import { Separator } from "./Separator";
import { DonateVoluntary } from "../components/Main/DonateVoluntary"
import { DropdownMenuDemo } from "../components/Main/DropDownMenu"

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  background: '$White',
  paddingX: '3rem',
  paddingTop: '0.75rem',
  paddingBottom: '0.38rem',
  marginBottom: '0.37rem',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
});

const LogoContainer = styled('div', {
  variants: {
    width: {
      Desktop: {
        width: '200px',
      },
      Tablet: {
        width: '200px',
      },
      Mobile: {
        width: '180px',
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


export const Header = () => {

  return (
    <Container>
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
          <DropdownMenuDemo />
        </ContentDropdown>
        <LinksAndLangContainer
          hidden={{
            '@initial': 'Mobile',
            '@bp2': 'Tablet',
            '@bp3': 'Desktop'
          }}>
          <LinksContainer>
            {header.links.map(({ href, text }) => (
              <Link key={text} href={href}>
                <a>{text}</a>
              </Link>
            ))}

          </LinksContainer>
        </LinksAndLangContainer>
      </RightMenuContainer>
      {/* <DonateVoluntary/> */}
    </Container>
  )
}