import { createGlobalStyle } from 'styled-components';
import PropsTheme from './theme.config';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    background: ${({ theme }: { theme: PropsTheme }) => theme.background}
  }

  * {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle; 