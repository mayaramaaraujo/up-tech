export function SearchComponent(props) {

  return (
    <>
      <input type="text" value={props.search} onChange={(e) => props.setSearch(e)} />
      <button onClick={() => props.booksSearch()}>Buscar</button>
    </>
  )
}