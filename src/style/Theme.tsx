import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme.config';

const Theme: React.FC = (props) => {
  return (
    <ThemeProvider theme={ lightTheme }>
      { props.children }
    </ThemeProvider>
  );
}

export default Theme;