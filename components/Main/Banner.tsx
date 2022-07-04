import { styled } from '../../stitches.config'


const Container = styled('div', {
  flexWithDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #FFA3A3 0%, #FFDFDF 29.69%, #FFFFFF 100%)',
});


// Check how to avoid repetition in the 
const Paragraph = styled('p', {
  color: 'DarkRed',
  variants: {
    Paragraph: {
      Desktop: {
        fontSize: '$5',
        textAlign: 'center',
        width: '70%',
        lineHeight: '4.69rem',
        fontWeight: '500'
      },
      Tablet: {
        fontSize: '$4',
        textAlign: 'center',
        width: '70%',
        lineHeight: '3rem',
        fontWeight: '400'
      },
      Mobile: {
        fontSize: '$3',
        textAlign: 'center',
        width: '70%',
        lineHeight: '2rem',
        fontWeight: '400'
      }
    }
  }

})

interface BannerProps {
  text: string;
}

const MainBanner = ({ text }: BannerProps) => {

  return (
    <Container>
      <Paragraph
        Paragraph={{
          '@initial': 'Mobile',
          '@bp2': 'Tablet',
          '@bp3': 'Desktop',
        }}>{text}</Paragraph>
    </Container>
  );
};

export default MainBanner;