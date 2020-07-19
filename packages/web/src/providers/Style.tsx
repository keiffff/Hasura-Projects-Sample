import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

type Props = {
  children: ReactNode;
};

const theme = createMuiTheme({
  palette: {
    primary: { main: '#262626' },
    secondary: { main: '#3797f7' },
  },
});

export const StyleProvider = ({ children }: Props) => (
  <>
    <Global styles={globalStyle} />
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </>
);

const globalStyle = css({
  'html, body': {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Neue, sans-serif',
    margin: 0,
    padding: 0,
    background: '#fafafa',
    color: '#262626',
  },
});
