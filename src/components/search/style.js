import { Input } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import styled from 'styled-components';

export const SearchContainer = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const Search = styled(Input) `
  width: 60%;
`

export const OrderBySection = styled.section `
  margin-left: 15px;
  /* width: 20%; */
`

export const SearchIcon = styled(SearchOutlined) `
  cursor: pointer;
  color: #c1c1c1;
  
  :hover {
    color: #000;
  }
`