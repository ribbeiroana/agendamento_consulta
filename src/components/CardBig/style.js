import styled from 'styled-components';

export const Img = styled.div`
img {
  background-color: #d9d9d9;
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
`
export const Container = styled.div`
  background-color: #fff;
  height: 300px;
  width: 700px;
  display: flex;
  margin: 1rem 0 0 11rem;
  align-items: center;
  border-radius: 30px;
  box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
`


export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-left: 1rem;
  max-width: 100%;

  input {
  border-radius: 10px;
  border: none;
  width: 300px;
  background-color: #d9d9d9;
  padding: 10px;
  color: black;
  outline: none;
  }
`