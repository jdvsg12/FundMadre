import { styled } from '../../stitches.config'


const Container = styled('div', {
  flexWithDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #FFA3A3 0%, #FFDFDF 29.69%, #FFFFFF 100%)',
});

const Paragraph = styled('p', {
  fontSize: '$5',
  textAlign: 'center',
  width: '70%',
  lineHeight: '4.69rem',
})

interface BannerProps {
  text: string;
}

const MainBanner = ({ text }: BannerProps) => {

  return (
    <Container>
      <Paragraph>{text}</Paragraph>
    </Container>
  );
};

export default MainBanner;