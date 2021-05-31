import logoLight from '../icons/GitHubLight.svg';
import logoDark from '../icons/GitHubDark.svg';

export default interface PropsTheme {
  background: string;
  logo: string;
}

export const lightTheme = {
  background: '#ffffff',
  logo: logoLight
}

export const darkTheme = {
  background: '#24292E',
  logo: logoDark
}