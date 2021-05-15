import axios from 'axios';
import { API_KEY, BASE_URL } from '../../utils';

import { SearchComponent } from '../../components/search/searchComponent';
import { ResultsComponent } from '../../components/results/resultsComponent';
import { useEffect, useRef, useState } from 'react';
import { useInput } from '../../hooks/useInput';

export function Home() {
  const isFirstRender = useRef(true);

  const [search, setSearch] = useInput('');
  const [maxResults, setMaxResults] = useInput(10);
  const [startIndex, setStartIndex] = useState(0);
  const [results, setResults] = useState({});

  const booksSearch = () => {

    axios.get(`${BASE_URL}/volumes`, {
      params: {
        q: search,
        startIndex: startIndex,
        maxResults: maxResults,
        key: API_KEY
      }
    })
    .then((res) => {
      setResults(res.data)
    })
    .catch(err => 
      console.log(err)
    )
  }

  useEffect(() => {
    
    if(isFirstRender.current) {
      isFirstRender.current = false;
      return
    }

    booksSearch();
  }, [maxResults, startIndex])

  return (
    <>
      <SearchComponent booksSearch={booksSearch} search={search} setSearch={setSearch} />
      <ResultsComponent
        results={results}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        maxResults={maxResults}
        setMaxResults={setMaxResults}
      />
    </>
  )
}