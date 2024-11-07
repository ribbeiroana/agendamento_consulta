import styled from 'styled-components';


export const Header = styled.div`
  background: #ffff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  width: 150px;
`

export const HeaderSoon = styled.div`
margin-top: 1rem;
`

export const HeaderItems = styled.div`
display: flex;
margin-top: -320%;

ul li {
  list-style: none;
}

`

export const Button = styled.button`
  padding: 8px;
  width: 100px;
  border: none;
  color: #ffff;
  background-color: black;
  border-radius: 10px;
  font-weight: 600;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
  background-color: #d9d9d9;
  color: black;
}

`

