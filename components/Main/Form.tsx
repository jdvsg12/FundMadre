import { FormEvent, MouseEvent, useState } from 'react';
import { styled } from '../../stitches.config';
import { forms as FormData } from '../../data/heroCarousel';


const Content = styled('div', {
  position: 'absolute',
  bottom: '3rem',
  zIndex: '9999'
})

const GeneralContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  left: 'auto',
  marginLeft: '3rem',
  marginTop: '9rem',
  width: '40%'
})

const H1 = styled('h1', {
  color: 'white',
  textShadow: '0.3rem 0.3rem 0.5rem black'
})

const ContentForm = styled('div', {
  backgroundColor: '$blueMain',
  borderRadius: '1rem',
  padding: '0.8rem',
  left: '4rem',
  bottom: '1.5rem',
  alignItems: 'left',
  zIndex: '9999'
})

const Legend = styled('div', {
  fontSize: '1.8rem',
  textAlign: 'left',
  margin: '0rem 1rem',
  marginBottom: '1rem',
  color: 'white',
  fontWeight: '700',
})
const FormMoneyButton = styled('input', {
  variants: {
    color: {
      unselected: {
        border: 'none',
        borderRadius: '0.3rem',
        width: '100%',
        padding: '1rem 1rem',
        fontSize: '1rem',
        color: 'grey',
      },
      selected: {
        border: 'none',
        borderRadius: '0.3rem',
        width: '100%',
        padding: '1rem 1rem',
        fontSize: '1rem',
        backgroundColor: '$blueSecond',
        color: 'White',
      },
    },
  },
});

const Input = styled('input', {
  border: 'none',
  borderRadius: '0.3rem',
  padding: '1rem 1rem',
  color: 'gray',
  fontSize: '1rem',
  width: '100%',
  marginBottom: '1rem'
})

const ButtonBanner = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
})

const TextBanner = styled('div', {
  border: 'none',
  marginTop: '1rem',
})

const Button = styled('button', {
  backgroundColor: '$blueSecond',
  border: 'none',
  borderRadius: '0.3rem',
  padding: '1rem 1rem',
  color: 'white',
  width: '100%',
  textAlign: 'left',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: '$blueSecond',
    boxShadow: 'inset 0rem 0rem 0.2rem Black',
    color: 'white',
  }
});



export const MainBannerForm = () => {
  const [valueToGive, setValueToGive] = useState<string>("$10.000");

  const registerUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // don't redirect the page
    // add form logic here
  };

  const handleMoneyButtonClick = ({ currentTarget }: MouseEvent<HTMLInputElement>) => {
    setValueToGive(String(currentTarget.value))
  };

  return (
    <Content>
      {FormData.GropMothersTab.map(({ message, title }, index) => {

        return (
          <GeneralContent key={`${title}-${index}`}>
            <H1 key={`${message}-${index}`}>{message}</H1>
            <ContentForm key={`${title}-${index}`}>
              <form onSubmit={registerUser}>
                <Legend key={`${title}-${index}`}>{title}</Legend>
                <ButtonBanner>
                  {FormData.firstInputsRow.map(({ type, text, value }, index) => {
                    return (
                      <FormMoneyButton key={`${type}-${index}`}
                        color={valueToGive === value ? 'selected' : 'unselected'}
                        type={type}
                        autoComplete="name"
                        name={text}
                        onClick={handleMoneyButtonClick}
                        value={value}
                        required
                      />)
                  })}
                </ButtonBanner>
                <TextBanner>
                  {FormData.secondRow.map(({ type, placeholder, value }, index) => {
                    return (
                      <Input key={`${type}-${index}`}
                        id="name"
                        type={type}
                        value={value}
                        placeholder={placeholder} required />
                    )
                  })}
                </TextBanner>
                <Button>
                  Enviar
                </Button>
              </form>
            </ContentForm>
          </GeneralContent>
        )
      })}
    </Content>
  );
}

export const MainBannerFormVoluntary = () => {

  const registerUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic
  };

  return (
    <Content>
      {FormData.VoluntaryTab.map(({ message, title }, index) => {
        return (
          <GeneralContent key={`${title}-${index}`}>
            <H1 key={`${message}-${index}`}>{message}</H1>
            <ContentForm key={`${title}-${index}`}>
              <form onSubmit={registerUser}>
                <Legend key={`${title}-${index}`}>{title}</Legend>
                <TextBanner>
                  {FormData.VoluntaryFirstInputsRow.map(({ type, placeholder, value }, index) => {
                    return (
                      <Input key={`${type}-${index}`}
                        id="name"
                        type={type}
                        value={value}
                        placeholder={placeholder} required />
                    )
                  })}
                </TextBanner>
                <Button>
                  Enviar
                </Button>
              </form>
            </ContentForm >
          </GeneralContent>
        );
      })}
    </Content>)
}

export const MainBannerFormKit = () => {
  const [valueToGive, setValueToGive] = useState<string>("Kit 1");

  const registerUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic
  };
  const handleKitButtonClick = ({ currentTarget }: MouseEvent<HTMLInputElement>) => {
    setValueToGive(String(currentTarget.value))
  };
  return (
    <Content>
      {FormData.KitTab.map(({ message, title }, index) => {

        return (
          <GeneralContent key={`${title}-${index}`}>
            <H1 key={`${message}-${index}`}>{message}</H1>
            <ContentForm>
              <form onSubmit={registerUser}>
                <Legend key={`${title}-${index}`}>{title}</Legend>
                <ButtonBanner>
                  {FormData.KitfirstInputsRow.map(({ type, text, value }, index) => {
                    return (
                      <FormMoneyButton key={`${type}-${index}`}
                        color={valueToGive === value ? 'selected' : 'unselected'}
                        type={type}
                        autoComplete="name"
                        name={text}
                        onClick={handleKitButtonClick}
                        value={value}
                        required
                      />)
                  })}
                </ButtonBanner>
                <TextBanner>
                  {FormData.KitSecondInputRow.map(({ type, placeholder, value }, index) => {
                    return (
                      <Input key={`${type}-${index}`}
                        id="name"
                        type={type}
                        value={value}
                        placeholder={placeholder} required />
                    )
                  })}
                </TextBanner>
                <Button>
                  Enviar
                </Button>
              </form>
            </ContentForm>
          </GeneralContent>
        )
      })}
    </Content>
  );
}

