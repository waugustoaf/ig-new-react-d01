import { ThemeProvider } from 'styled-components';

interface CustomThemeProviderProps {
  children?: React.ReactNode;
}

export const theme = {
  colors: {
    purple: {
      main: '#8284FA',
      dark: '#5E60CE',
    },
    blue: {
      main: '#4EA8DE',
      dark: '#1E6F9F',
    },
    gray: {
      700: '#0D0D0D',
      600: '#1A1A1A',
      500: '#262626',
      400: '#333333',
      300: '#808080',
      200: '#D9D9D9',
      100: '#F2F2F2',
    },
    danger: '#E25858',
  },
};

export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
