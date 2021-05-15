import { Input, InputAdornment, MenuItem, Select, InputLabel } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

export function SearchComponent(props) {

  const handleKeyPress = (event) => {
    if(event.key == "Enter") {
      props.booksSearch();
    }
  }

  return (
    <>
      <Input 
        placeholder="Buscar livros"
        value={props.search} 
        onChange={(e) => props.setSearch(e)}
        onKeyPress={(e) => handleKeyPress(e)}
        endAdornment={
          <InputAdornment position="end">
            <SearchOutlined
              aria-label="toggle password visibility"
              onClick={() => props.booksSearch()}
            >
            </SearchOutlined>
          </InputAdornment>
        }
      />
      
      <Select 
        value={props.orderBy} 
        onChange={(e) => props.setOrderBy(e)}
        placeholder="Ordenar por"
      > 
        <MenuItem value="newest">Adicionados recentementes</MenuItem>
        <MenuItem value="relevance">Relevância</MenuItem>
      </Select>
    </>
  )
}