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

const LangsContainer = styled('div', {
  flexWithDirection: 'row',
  alignItems: 'center',
  color: '$blueMain',
  gap: '0.3rem',
  height: '1.2rem'
})

const LangButton = styled('button', {
  buttonAsLink: '',
  fontSize: '1rem',
})

const ContentDonatevoluntary = styled('div',{
  right: '1rem',
  top: '4rem',
  gap: '0.5rem',
  position: 'absolute',
  flexWithDirection: 'row',
  alignItems: 'center',
  zIndex: '2'
})

const IconoStatico = styled('div',{
  position: 'relative',
  marginTop: '1.7rem',
  left: '1rem',
  width: '3.8rem',
  height: '3.8rem',
  borderRadius: '5rem',
  backgroundColor: '$blueSecond'
})

const IconoText = styled('button',{
  position: 'relative',
  right: '1.8rem',
  padding: '0.5rem 1rem',
  paddingLeft: '2rem',
  fontSize: '1rem',
  fontWeight: 'bolder',
  color: 'White',
  backgroundColor: '$blueSecond',
  border: 'none',
  borderRadius: '0.5rem',
  zIndex: '3'
})

export const Header = () => {

  return (
    <Container>
      <LogoContainer>
        <Image
          src={generalData.fundmadreLogoName}
          alt="Fundmadre logo"
          layout='intrinsic'
          objectFit='contain'
        />
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
          {/* <LangsContainer>
            <LangButton>
              {header.langs[0]}
            </LangButton>
            <Separator decorative={true} orientation="vertical" />
            <LangButton>
              {header.langs[1]}
            </LangButton>
          </LangsContainer> */}
        </LinksAndLangContainer>
        {/* <AvatarWithMenu /> */}
      </RightMenuContainer>
      <DonateVoluntary/>
    </Container>
  )
}