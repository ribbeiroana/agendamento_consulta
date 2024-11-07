import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 200px;
`

export const ContainerContent = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

export const CardSmall = styled.div`
   background-color: #d9d9d9;
   background-image: linear-gradient(160deg, #d9d9d9 0%, #ffffff 100%);
  height: 200px;
  width: 200px;
  margin: 20px 0 0 20px;
  display: flex;
  border-radius: 30px;
  box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  
  .icon {
  font-size: 60px;
  margin-top: 40px;
  margin-left: 30px;
}

.text-card-small{
  margin-top: 120px;
  font-size: 17px;
}
  `

export const CardBig = styled.div`
 background-color: #d9d9d9;
  background-image: linear-gradient(160deg, #d9d9d9 0%, #ffffff 100%);
  height: 400px;
  margin: 0 200px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  border-radius: 30px;
  box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 9px -8px rgba(0, 0, 0, 0.75);

  .titulo-card-big {
  font-size: 25px;
  margin-top: 10px;
  margin-left: 20px;
}
`


