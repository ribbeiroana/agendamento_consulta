import styled from 'styled-components';

export const Container = styled.div `
margin-left: 200px;
`
export const Cards = styled.div `
display: grid;
grid-template-columns: 1fr 1fr;
`
export const CardSmall = styled.div `
  background-color: #d9d9d9;
  background-image: linear-gradient(160deg, #d9d9d9 0%, #ffffff 100%);
  height: 200px;
  width: 200px;
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);

.title-card-small {
  font-size: 40px;
}`

export const CardAverage = styled.div `
  background-color: #d9d9d9;
  background-image: linear-gradient(160deg, #d9d9d9 0%, #ffffff 100%);
  height: 270px;
  width: 1220px;
  margin: 0 1rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
`
export const CardBig = styled.div `
  background-color: #d9d9d9;
  background-image: linear-gradient(160deg, #d9d9d9 0%, #ffffff 100%);
  height: 300px;
  margin: 1rem 1rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
`

