import React, { useEffect, useState } from 'react';
import useSearchContext from '../../context/SearchContext';

import { Container } from './styles';

const ProfilePage: React.FC = () => {
  const { searchValue } = useSearchContext();
  const [ apiResponse, setApiResponse ] = useState([])

  useEffect( () => {
    const api = async () => {
      const response = await fetch(`https://api.github.com/users/${searchValue}/repos`)
      const data = await response.json()

      setApiResponse(data)
    }

    api();
  }, [])

  console.log(apiResponse)
  return (
    <Container>
      Page
    </Container>
  );
}

export default ProfilePage;