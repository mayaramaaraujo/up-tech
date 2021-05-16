import {List, ListItem, Link, Typography} from '@material-ui/core';
import styled from 'styled-components';

export const BookSection = styled(List) `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

export const Book = styled(ListItem) `
  display: flex;
  box-sizing: content-box;
  min-height: 100px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const BookHeader = styled.header `
  min-width: 15%;
`

export const BookMain = styled.main `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  width: 100%;
  min-height: 200px; 
`

export const BookLink = styled(Link) `
  text-align: end;
`


export const BookImg = styled.img `
  width: auto;
  height: 100%;
  padding: 1%;
`

export const ResultsSubtitle = styled(Typography) `
  text-align: center;
  margin: 2%;
`
