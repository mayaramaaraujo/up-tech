import axios from 'axios';
import { API_KEY, BASE_URL} from '../../utils';

import { SearchComponent } from '../../components/search/searchComponent';
import { ResultsComponent } from '../../components/results/resultsComponent';
import { useEffect, useRef, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { HomePage } from './style';
import { Header } from '../../components/header';

export function Home() {
  const isFirstRender = useRef(true);

  const [search, setSearch] = useInput('');
  const [orderBy, setOrderBy] = useInput('relevance')
  const [maxResults, setMaxResults] = useInput(10);
  const [startIndex, setStartIndex] = useState(0);
  const [results, setResults] = useState({});


  const booksSearch = () => {

    axios.get(`${BASE_URL}/volumes`, {
      params: {
        q: search,
        startIndex: startIndex,
        maxResults: maxResults,
        orderBy: orderBy,
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

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return
    }

    booksSearch();
  }, [maxResults, startIndex, orderBy])

  return (
    <HomePage>
      <Header />
      
      <SearchComponent
        booksSearch={booksSearch}
        search={search}
        setSearch={setSearch}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
      <ResultsComponent
        results={results}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        maxResults={maxResults}
        setMaxResults={setMaxResults}
      />
    </HomePage>
  )
}