import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}
        <h1>Zeca Cordeiro</h1>
        <h2>@zecaxcr</h2>

        <p>FullStack Developer</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Ingressou em janeiro de 2019
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>17</strong>
            <span>
              <strong>182 </strong>seguidores
            </span>
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
