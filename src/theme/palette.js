import { red, blueGrey, grey } from '@mui/material/colors';

const white = '#ffff';
const black = '#181F3F';
const darkBlack = '#090909';
const lightBlack = '#rgba(0, 0, 0, 0.9)';
const darkWhite = '#5b5b5b';
const blue = '#23224e';
const gray = '#AEAEAE';
const lightGray = ' #505050';
const yellow = 'rgba(243, 82, 63, 1)';
const lightBlue = '#2890AD';
const themePrimaryColor = '#2890AD';
const seaGreen = '#7EF7FF';

// eslint-disable-next-line import/prefer-default-export
export const palette = {
  black,
  white,
  blue,
  gray,
  yellow,
  darkBlack,
  // seaGreen,

  primary: {
    lightBlack,
    darkWhite,
    contrastText: themePrimaryColor,
    dark: themePrimaryColor,
    main: themePrimaryColor,
    light: white,
    blue,
    lightBlue,
    seaGreen,
    gray
  },
  secondary: {
    contrastText: white,
    dark: themePrimaryColor,
    main: themePrimaryColor,
    light: themePrimaryColor,
    yellow: yellow
  },
  error: {
    contrastText: white,
    dark: red[900],
    main: red[600],
    light: red[400]
  },
  text: {
    primary: black,
    secondary: white,
    link: blue[600],
    darkWhite,
    darkBlack,
    lightGray,
    lightBlack
  },
  link: blue[800],
  icon: blueGrey[600],
  background: {
    default: '#F4F6F8',
    paper: white
  },
  divider: grey[200]
};
