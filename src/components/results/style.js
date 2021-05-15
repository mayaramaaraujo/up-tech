import {List, ListItem} from '@material-ui/core';
import styled from 'styled-components';

export const BookSection = styled(List) `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
`

export const Book = styled(ListItem) `
  display: flex;
  box-sizing: content-box;
  min-height: 200px;
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

export const BookImg = styled.img `
  width: auto;
  height: 100%;
  padding: 1%;
`
