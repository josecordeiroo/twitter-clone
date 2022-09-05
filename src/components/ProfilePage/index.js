import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButtonOne,
} from './styles';

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButtonOne>Editar perfil</EditButtonOne>
        <h1>José Cordeiro</h1>
        <h2>@josecordeiroo</h2>

        <p>FullStack Developer</p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Ingressou em janeiro de 2018
          </li>
        </ul>

        <Followage>
          <span>
            <strong>18 </strong>Seguindo
          </span>
          <span>
            <strong>182 </strong>Seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
