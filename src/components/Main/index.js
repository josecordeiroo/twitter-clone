import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

import ProfilePage from '../ProfilePage';
import Feed from '../Feed';

const Main = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>José Cordeiro</strong>
          <span>182 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <Feed/>

      <BottomMenu>
        <HomeIcon className='active' />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
