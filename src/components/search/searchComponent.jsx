import { useInput } from '../../hooks/useInput'

export function SearchComponent(props) {
  const [search, setSearch] = useInput('');
  const [startIndex, setStartIndex] = useInput(0);
  const [maxResults, setMaxResults] = useInput(10);

  const searchParams = {
    search: search,
    startIndex: startIndex,
    maxResults: maxResults
  }

  return (
    <>
      <input type="text" value={search} onChange={setSearch} />
      <button onClick={() => props.booksSearch(searchParams)}>Buscar</button>
    </>
  )
}