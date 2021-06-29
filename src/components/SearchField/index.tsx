import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import useSearchContext from '../../context/SearchContext'
import { Form, TextField, Button } from './style'

export default function SearchField():JSX.Element {
  const [ textField, setTextField] = useState("")
  const [ redirect, setRedirect ] = useState<boolean>(false)

  const { searchValue, setSearchValue } = useSearchContext()
  function clickHandler(event: React.MouseEvent){
    event.preventDefault()
    setSearchValue(textField)
    setRedirect(true)
  }

  return (
    <Form>
      <TextField 
        value={textField}
        placeholder="Username"
        onChange={ e => setTextField(e.target.value) }  
      />
      <Button
        active={(textField === '')}
        onClick={clickHandler}
      >
        <FontAwesomeIcon icon={faSearch}/>
      </Button>
      {redirect && (<Redirect to={`/user/${searchValue}`} />)}
    </Form>
  )
}
