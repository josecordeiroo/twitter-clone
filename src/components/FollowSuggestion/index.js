import React from 'react';

import { Container, Avatar, Info, FollowButton, Text, Title } from './styles';

const FollowSuggestion = () => {
  return (
    <Container>
      <Title>
        <h3>Talvez você curta</h3>
      </Title>

      <div>
        <Info>
          <Avatar />
          <Text>
            <strong>Steve Jobs</strong>
            <span>@SteveJobs</span>
          </Text>
        </Info>
        <FollowButton>Seguir</FollowButton>
      </div>

      <div>
        <Info>
          <Avatar />
          <Text>
            <strong>BillGates</strong>
            <span>@BillGates</span>
          </Text>
        </Info>
        <FollowButton>Seguir</FollowButton>
      </div>

      <div>
        <Info>
          <Avatar />
          <Text>
            <strong>Elon Musk
</strong>
            <span>@elonmusk</span>
          </Text>
        </Info>
        <FollowButton>Seguir</FollowButton>
      </div>
    </Container>
  );
};

export default FollowSuggestion;
