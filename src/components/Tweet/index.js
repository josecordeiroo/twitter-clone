import React from 'react';

import {
  Container,
  Retweeted,
  UserIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LiketIcon,
} from './styles';

const Tweet = () => {
  return (
    <Container>
      <Retweeted>Você retweetou</Retweeted>
      <UserIcon />
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Usuário</strong>
            <span>@usuario123</span>
            <Dot />
            <time>02 de setembro</time>
          </Header>

          <Description>Descrição simples de teste</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              27
            </Status>
            <Status>
              <RetweetIcon />
              89
            </Status>
            <Status>
              <LiketIcon />
              376
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
