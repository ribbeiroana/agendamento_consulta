import React from 'react';
import { Container, CardBig } from './style';
import Menu from '../../components/Menu';

const Agenda = () => {
  return (
    <Container>
      <Menu />
      <h1>Agenda</h1>
      <CardBig/>
      </Container>
  )
}

export default Agenda;