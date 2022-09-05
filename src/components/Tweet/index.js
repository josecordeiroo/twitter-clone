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
      <Retweeted>
        <UserIcon /> Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Twitter Support</strong>
            <span>@TwitterSupport</span>
            <Dot />
            <time>18 de fevereiro</time>
          </Header>

          <Description>
            We're here for all the Twitter Circle love! Because so many of you
            are trying it out, there may be some delay in when you get access.
            We're working on continuing to roll this out so you all can start
            Tweeting to your Circle.
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              82
            </Status>
            <Status>
              <LiketIcon />
              182
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
