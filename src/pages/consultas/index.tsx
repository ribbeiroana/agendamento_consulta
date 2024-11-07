import React from 'react';
import { Container, ContainerContent, CardSmall, CardBig } from './style';
import Menu from '../../components/Menu';
import { FaPlusCircle } from "react-icons/fa";

const Consultas = () => {
  return (
    <Container>
      <Menu />
      <ContainerContent>
        <CardSmall>
          <FaPlusCircle className='icon' />
          <h4 className='text-card-small'>Agendar nova consulta</h4>
          </CardSmall>
        </ContainerContent>

      <CardBig>
        <h3 className='titulo-card-big'>Histórico de Consultas</h3>
        </CardBig>

    </Container>

  )
}

export default Consultas;