import React from 'react';
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  theme as chakraTheme,
} from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import '../styles/night-owl.css';
import '@fontsource/permanent-marker';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/900.css'; // this is for the site logo (h2y)

const customTheme = {
  ...chakraTheme,
  fonts: {
    heading: `Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  colors: {
    ...chakraTheme.colors,
    brand: {
      50: '#f7fafb',
      100: '#e6eff2',
      200: '#d4e3e8',
      300: '#c1d7de',
      400: '#acc9d2',
      500: '#94b9c6',
      600: '#78a7b7',
      700: '#5791a5',
      800: '#2a748d',
      900: '#104556',
    },
    rss: {
      default: '#ee802f',
    },
  },
  icons: {
    ...chakraTheme.icons,
  },
};

const ThemeWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <Global
          styles={css`
            html {
              scroll-behavior: smooth;
            }

            ::selection {
              background-color: #5791a5;
              color: #fefefe;
            }
          `}
        />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
