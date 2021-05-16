import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const DetailsPage = styled.div `
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

export const DetailsHeader = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8%;
  margin-top: 1%;
`

export const ArrowBack = styled(ArrowBackIcon) `
  background-color: #f1f1f1;
  border-radius: 50%;
  padding: 2%;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #020202;
  }
`

export const BookDescription = styled.div `
  margin-left: 2%;
`

export const BookDetailsMain = styled.main `
  display: flex;
  margin-top: 2%;

  @media only screen and (max-width: 599px) {
    width: 98%;
    margin: 0% 1%;
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    margin: 0% 5%;
  } 
`

export const BookDetaisFooter = styled.footer `
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 599px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  } 
`

export const BookInfo = styled.div `
  text-align: end;
`

export const BookActions = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0px;

  @media only screen and (max-width: 599px) {
    justify-content: space-around;
    align-items: space-between;
  }

  @media only screen and (max-width: 768px) {
    justify-content: space-around;
    align-items: space-between;
  } 
`

export const BuyLink = styled.div `
  background-color: #d1d1d1;
  padding: 10px;
  width: 75px;
  text-align: center;
  border-radius: 25px;
  margin-right: 5%;

  :hover {
    background-color: #f1f1f1;
  }
`

export const Favorite = styled.div `
  background-color: rosybrown;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #d1d1d1;
  }
`

export const NotFavorite = styled.div `
  background-color: rosybrown;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #d1d1d1;
  }
`