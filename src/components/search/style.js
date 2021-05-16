import { SearchOutlined } from '@material-ui/icons';
import styled from 'styled-components';

export const SearchContainer = styled.div `
  display: flex;
  flex-direction: row;
`

export const OrderBySection = styled.section `
  margin-left: 15px;
  width: 35%;
`

export const SearchIcon = styled(SearchOutlined) `
  cursor: pointer;
  color: #c1c1c1;
  
  :hover {
    color: #000;
  }
`