import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Redirect } from 'react-router'
import useSearchContext from '../../context/SearchContext'
import { Container, TextField, Div } from './style'

export default function SearchField():JSX.Element {
  const [ textField, setTextField] = useState<string>()
  const [ redirect, setRedirect ] = useState<boolean>(false)

  const { searchValue ,setSearchValue } = useSearchContext()
  function clickHandler(){
    setSearchValue(textField)
    setRedirect(true)
  }

  return (
    <Container>
      <TextField 
        value={textField}
        placeholder="Username"
        onChange={ e => setTextField(e.target.value) }  
      />
      <Div
        active={textField === '' ? true : false}
        onClick={clickHandler}
      >
        <FontAwesomeIcon icon={faSearch}/>
      </Div>
      {redirect ? <Redirect to={`/user/${searchValue}`} /> : <></>}
    </Container>
  )
}
