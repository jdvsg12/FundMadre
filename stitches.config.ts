import { createStitches } from '@stitches/react';

type RemMeasure = `${string}rem`;

export const { styled, getCssText } = createStitches({
  media: {
    bp1: '(min-width: 540px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1280px)',
  },
  utils: {
    buttonAsLink: () => ({
      backgroundColor: 'transparent',
      color: '$mainBlue',
      border: 'none',
      padding: '0',
      cursor: 'pointer',
      width: 'fit-content',
      // Prefer border-bottom over text-decoration: underline, because the "p" or 'g' doesn't cut the underline
      borderBottom: '1.5px solid $mainBlue',
      textDecoration: 'none',
    }),
    flexWithDirection: (direction: 'row' | 'column') => ({
      display: 'flex',
      flexDirection: direction,
    }),
    marginX: (value: RemMeasure) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: RemMeasure) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: RemMeasure) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: RemMeasure) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  theme: {
    fonts: {
      system: 'Roboto',
    },
    colors: {
      blueMain: '#5B85BC',
      blueSecond: '#345F97',
      pinkMain: '#E3B4A8',
      pink2: '#FFC0CB',
      white: '#FFFFFF',
    },
    fontSizes: {
      1: '12px',
      2: '16px',
      3: '18px',
      4: '24px',
      5: '35px',
      6: '44px',
    },
  },
});