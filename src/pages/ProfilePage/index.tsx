import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from './styles';

interface userProps {
  user: string
}

const ProfilePage: React.FC = () => {
  const [ apiResponse, setApiResponse ] = useState([])
  const { user } = useParams<userProps>()

  useEffect( () => {
    const api = async () => {
      // const response = await fetch(`https://api.github.com/users/${searchValue}/repos`)
      // const data = await response.json()

      setApiResponse([])
    }

    api();
  }, [])

  console.log(user)

  console.log(apiResponse)
  return (
    <Container>
      {user}
    </Container>
  );
}

export default ProfilePage;