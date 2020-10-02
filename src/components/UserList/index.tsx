import React from 'react';
import {
  Container, Role, User, Avatar,
} from './styles';

interface UserProps{
  nickname: string;
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => (
  <User>
    <Avatar className={isBot ? 'bot' : ''} />
    <strong>{nickname}</strong>
    {isBot && <span>Bot</span>}
  </User>
);

const ServerName: React.FC = () => (
  <Container>
    <Role>Disponivel - 1</Role>
    <UserRow nickname="Fabio Celeste" />

    <Role>Offline - 18</Role>
    <UserRow nickname="Raiw" isBot />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
    <UserRow nickname="Fulano" />
  </Container>
);

export default ServerName;
