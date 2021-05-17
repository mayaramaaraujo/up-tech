import { Input, InputAdornment, MenuItem, Select, InputLabel } from '@material-ui/core';
import { useHistory } from 'react-router';
import { FavoriteButton } from '../../pages/Details/style';
import { goToPages } from '../../utils';
import { OrderBySection, Search, SearchContainer, SearchIcon } from './style';

export function SearchComponent(props) {

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.booksSearch();
    }
  }

  const history = useHistory();

  return (
    <SearchContainer>
      <Search
        color="secondary"
        placeholder="Buscar livros"
        value={props.search}
        onChange={(e) => props.setSearch(e)}
        onKeyPress={(e) => handleKeyPress(e)}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon
              aria-label="toggle password visibility"
              onClick={() => props.booksSearch()}
            >
            </SearchIcon>
          </InputAdornment>
        }
      />
      <OrderBySection>
        <InputLabel>Ordenar por</InputLabel>
        <Select
          color="secondary"
          fullWidth={true}
          value={props.orderBy}
          label="Ordenar por"
          onChange={(e) => props.setOrderBy(e)}
          placeholder="Ordenar por"
        >
          <MenuItem value="relevance">Relevância</MenuItem>
          <MenuItem value="newest">Adicionados recentementes</MenuItem>
        </Select>
      </OrderBySection>

      <FavoriteButton variant="outlined" color="secondary" onClick={() => goToPages(history, "/favorites")}>
        ver favoritos
      </FavoriteButton>
    </SearchContainer>
  )
}