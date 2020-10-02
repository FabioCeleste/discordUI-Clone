import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => (
  <Container>
    <ServerButton isHome />

    <Separator />

    <ServerButton />
    <ServerButton />
    <ServerButton hasNotifications />
    <ServerButton />
    <ServerButton mentions={3} />
    <ServerButton mentions={3} hasNotifications />
    <ServerButton />
    <ServerButton />
    <ServerButton />

    <ServerButton />
    <ServerButton />
  </Container>
);

export default ServerList;
