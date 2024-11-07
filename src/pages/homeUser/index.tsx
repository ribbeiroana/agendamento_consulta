import React from 'react';
import { Container, Cards } from './style';

import Menu from '../../components/Menu';
import Search from '../../components/Search';
import CardSmall from '../../components/CardSmall';
import CardAverage from '../../components/CardAverage';
import CardBigHome from '../../components/CardBigHome';
const HomeUser = () => {
  return (
    <Container>
      <Menu />
      <Search />
      <h2>Olá</h2>

      <Cards>
        <CardSmall />
        <CardAverage />
      </Cards>
      
      <CardBigHome />
    </Container>
  )
}

export default HomeUser;