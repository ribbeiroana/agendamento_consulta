import React from 'react';
import { Container, Inputs, Img } from './style';
// import logo from '../../assets/background.jpg';

const CardBig = () => {
  return (
    <>
      <Img>
        {/* <img src={logo} alt="avatar" /> */}
      </Img>

      <Container>
        <h2>Nome</h2>
        <Inputs>
          <label>CPF:</label>
          <input type="text" />
        </Inputs>

        <Inputs>
          <label>Telefone:</label>
          <input type="text" />
        </Inputs>

        <Inputs>
          <label>Idade:</label>
          <input type="text" />
        </Inputs>

        <Inputs>
          <label>Peso:</label>
          <input type="text" />
        </Inputs>

        <Inputs>
          <label>Email:</label>
          <input type="text" />
        </Inputs>

        <Inputs>
          <label>CEP:</label>
          <input type="text" />
        </Inputs>

        <Inputs>
          <label>Rua:</label>
          <input type="text" />
        </Inputs>

        <Inputs>
          <label>N°:</label>
          <input type="text" />
        </Inputs>

        <Inputs>
          <label>Cidade:</label>
          <input type="text" />
        </Inputs>
        
      </Container>
    </>
  )
}

export default CardBig;