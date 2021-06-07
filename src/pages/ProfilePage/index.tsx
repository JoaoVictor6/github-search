import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import Repositories from '../../components/Repositories';
import SearchField from '../../components/SearchField';
import Sidebar, { UserInformation } from '../../components/Sidebar';
import { Container, RepoDiv } from './styles';

interface userProps {
  user: string
}

const ProfilePage: React.FC = () => {
  const [ userRepositories, setUserRepositories ] = useState([])
  const [ hasError, setHasError ] = useState(false)
  const [ userInfo, setUserInfo ] = useState<UserInformation>({} as UserInformation)
  const { user } = useParams<userProps>()

  useEffect( () => {
    const api = async () => {
      const userProfileResponse = await fetch(`https://api.github.com/users/${user}`)
      const profileData = await userProfileResponse.json()

      const userRepositoriesResponse = await fetch(`https://api.github.com/users/${user}/repos`)
      const userRepositoriesData = await userRepositoriesResponse.json()
      if(!!userRepositoriesData.message){
        setHasError(true)
      }

      setUserRepositories(userRepositoriesData)

      setUserInfo(profileData)
    }
    
    api();
  }, [])
  
  document.title = `${userInfo.name} user page`

  return (
    <Container>
      { hasError ? <Redirect to='/error'/> : ''}
      <Sidebar user={userInfo}/>
      <RepoDiv>
        <SearchField />
        <Repositories repositories={userRepositories}/>
      </RepoDiv>
    </Container>
  );
}

export default ProfilePage;