import React from 'react';

import { Container } from './styles';

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
}


function Sidebar({ user }: { user:UserInformation }):JSX.Element {
  return (
    <Container>
      <img src={user.avatar_url} alt="user logo" />
    </Container>
  );
}

export default Sidebar;