import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import SearchField from '../../components/SearchField';
import Sidebar, { UserInformation } from '../../components/Sidebar';
import { Container } from './styles';

interface userProps {
  user: string
}

const ProfilePage: React.FC = () => {
  // const [ apiResponse, setApiResponse ] = useState([])
  const [ userInfo, setUserInfo ] = useState<UserInformation>({} as UserInformation)
  const { user } = useParams<userProps>()

  useEffect( () => {
    const api = async () => {
      const response = await fetch(`https://api.github.com/users/${user}`)
      const data = await response.json()

      setUserInfo(data)
    }
    
    api();
  }, [])
  
  document.title = `${userInfo.name} user page`

  return (
    <Container>
      {!!userInfo.message ? <Redirect to='/error'/> : ''}
      <Sidebar user={userInfo}/>
      <SearchField />
    </Container>
  );
}

export default ProfilePage;