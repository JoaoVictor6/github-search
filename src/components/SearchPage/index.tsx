import React from 'react';
import { Main, Img, InputText } from './style';
import GitHub from '../../icons/GitHubDark.svg'

export default function SearchPage():JSX.Element {
  return (
    <Main>
      <Img src={ GitHub } alt="Logo" />
      <InputText 
        placeholder="Username"/>
    </Main>
  )
}
