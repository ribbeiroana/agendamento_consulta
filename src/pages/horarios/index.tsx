import React from 'react';
import { Container, CardBig } from './style';
import Menu from '../../components/Menu';

const Horario = () => {
  return (
    <Container>
      <Menu />
      <h1>Horários</h1>
      <CardBig />
    </Container>
  )
}

export default Horario;