import React, { useState } from 'react';
import { Main,
  Img,
  InputText,
  Form,
  Button
} from './style';
import GitHub from '../../icons/GitHubDark.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useSearchContext from '../../context/SearchContext';

export default function SearchPage():JSX.Element {
  const { searchValue, setSearchValue } = useSearchContext()
  const [ activeButton, setActiveButton ] = useState(false)

  return (
    <Main>
      <Img src={ GitHub } alt="Logo" />
      <Form
        active={activeButton}
      >
        <InputText 
          active={activeButton}
          placeholder="Username"
          value={searchValue}
          onChange={(e) => {
            const value = e.target.value;
            setSearchValue(value)

            value !== '' ? setActiveButton(true) : setActiveButton(false)
          }}
        />
        <Button
          active={activeButton}
          onChange={ e => e.preventDefault()}
        >
          <FontAwesomeIcon icon={faSearch}/>
        </Button>
      </Form>
    </Main>
  )
}
