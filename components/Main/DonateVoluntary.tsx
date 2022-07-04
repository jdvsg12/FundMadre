import Image from "next/image";
import generalIcono from "../../data/icono";
import { styled } from '../../stitches.config';
import { buttonDonate } from "../../data/buttonDonate";
import Link from "next/link";

// TODO: This should be camelCase
const ContentDonatevoluntary = styled('div', {
  right: '1rem',
  top: '4rem',
  gap: '0.5rem',
  position: 'absolute',
  flexWithDirection: 'row',
  alignItems: 'center',
  zIndex: '2'
})

// TODO: Don't use spanish
const IconoStatico = styled('div', {
  position: 'relative',
  marginTop: '1.7rem',
  left: '1rem',
  width: '3.8rem',
  height: '3.8rem',
  borderRadius: '5rem',
  backgroundColor: '$blueSecond',
  zIndex: '33'
})

// TODO: Don't use spanish
const IconoText = styled('button', {
  position: 'relative',
  right: '1.8rem',
  padding: '0.5rem 1rem',
  paddingLeft: '2.3rem',
  fontSize: '1rem',
  fontWeight: 'bolder',
  color: 'White',
  backgroundColor: '$blueSecond',
  border: 'none',
  borderRadius: '0.5rem',
  boxShadow: '0.2rem 0.2rem 0.5rem grey',
});

const Icon = styled('div', {
  marginLeft: '1.2rem',
  marginTop: '0.8rem'
})

// TODO: Volunteer instead of Voluntary
export const DonateVoluntary = () => {


  return (
    <ContentDonatevoluntary>
      <IconoStatico>
        <Icon>
          <Image
            src={generalIcono.iconoPregnant}
            alt="Pregnant"
            layout='intrinsic'
            objectFit='contain'
          />
        </Icon>
      </IconoStatico>
      <IconoText>
        {buttonDonate.links.map(({ href1, text1, }) => (
              <Link key={text1} href={href1}>
                <a>{text1}</a>
              </Link>
            ))}</IconoText>
      <IconoStatico>
        <Icon>
          <Image
            src={generalIcono.iconoDonate}
            alt="Donate"
            layout='intrinsic'
            objectFit='contain'
          />
        </Icon>
      </IconoStatico>
      <IconoText>{buttonDonate.links.map(({ href2, text2 }) => (
              <Link key={text2} href={href2}>
                <a>{text2}</a>
              </Link>
            ))}</IconoText>
    </ContentDonatevoluntary>
  )
};