import logoLight from '../icons/GitHubLight.svg';
import logoDark from '../icons/GitHubDark.svg';

export default interface PropsTheme {
  background: string;
  logo: string;
}

export const lightTheme = {
  background: '#ffffff',
  logo: logoLight,
  button: {
    colorOnHover: '#0069CA',
    colorOnFocus: '#ffffff',
    background: '#2E9BFF'
  }
}

export const darkTheme = {
  background: '#24292E',
  logo: logoDark
}