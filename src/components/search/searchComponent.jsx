import { Input, InputAdornment, MenuItem, Select, InputLabel } from '@material-ui/core';
import { OrderBySection, SearchContainer, SearchIcon } from './style';

export function SearchComponent(props) {

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.booksSearch();
    }
  }

  return (
    <SearchContainer>
      <Input
        fullWidth={true}
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
    </SearchContainer>
  )
}