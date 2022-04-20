import Image from "next/image";
import { styled } from "../stitches.config";
import generalData from "../data/general";
import { header } from "../data/header";
import Link from "next/link";
import { Separator } from "./Separator";
import { AvatarWithMenu } from "./AvatarWithMenu";
import { DonateVoluntary } from "../components/Main/DonateVoluntary" 

const Container = styled('div', {
  flexWithDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  variants:{
    hidden:{
      Desktop: {
        background: '$White',
        paddingX: '3rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.38rem',
        marginBottom: '0.37rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      Tablet: {
        position: 'absolute',
        background: '$White',
        paddingX: '3rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.38rem',
        marginBottom: '0.37rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
      Mobile: {
        position: 'absolute',
        background: '$White',
        paddingX: '3rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.38rem',
        marginBottom: '0.37rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    }
  }
});

const LogoContainer = styled('div', {
  width: '200px',
})

const RightMenuContainer = styled('div', {
  flexWithDirection: 'row',
  gap: '2.7rem',
  color: '$blueMain',
});

const LinksAndLangContainer = styled('div', {
  flexWithDirection: 'row',
  alignItems: 'center',
  gap: '3.5rem',
  color: '$blueMain',
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
    <Container  hidden={{
      '@initial': 'Mobile',
      '@bp2': 'Tablet',
      '@bp3': 'Desktop'
    }}>
      <LogoContainer>
        <a href="home">
        <Image
          src={generalData.fundmadreLogoName}
          alt="Fundmadre logo"
          layout='intrinsic'
          objectFit='contain'
        /></a>
      </LogoContainer>
      <RightMenuContainer>
        <LinksAndLangContainer>
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