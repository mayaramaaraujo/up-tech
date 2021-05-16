import styled from 'styled-components';

export const HomePage = styled.div `
  width: 80%;
  margin: 0% 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 599px) {
    width: 98%;
    margin: 0% 1%;
  }

  @media only screen and (min-width: 1024px) {
    width: 90%;
    margin: 0% 5%;
  } 
`



export const SearchSection = styled.section `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  width: 100%;
  border: 1px solid gray;
`

