import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

import { Container,
  Header,
  Img,
  InfoTitles,
  UserNumbers,
  Content,
  Bio,
  Name,
  FooterInformation,
  Icons } from './styles';

export interface UserInformation{
  login: string;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string;
  name: string;
  company: string;
  location: string;
  blog: string;
  twitter_username: string;
  message?: string;
  html_url?: string;
}


function Sidebar({ user }: { user:UserInformation }):JSX.Element {
  return (
    <Container>
      <Header>
      <Img src={user.avatar_url} alt="user logo" />
      <UserNumbers>
        <InfoTitles>{user.login}</InfoTitles>
        <InfoTitles>Followers</InfoTitles>
        {user.followers}
        <InfoTitles>Following</InfoTitles>
        {user.following}
      </UserNumbers>
      </Header>
      <Content>
        <Bio>{user.bio}</Bio>
        <Name>{user.name}</Name>

        <FooterInformation>
          Company: {user.company}<br />
          Location: {user.location}

          <Icons>
            <a href={user.blog || user.html_url} target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faSignOutAlt}/>
            </a>
            <a href={`https://twitter.com/${user.twitter_username || ''}`} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter}/>
            </a>
          </Icons>
        </FooterInformation>
      </Content>
    </Container>
  );
}

export default Sidebar;