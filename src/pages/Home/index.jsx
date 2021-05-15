import axios from 'axios';
import { SearchComponent } from '../../components/search/searchComponent';
import { API_KEY, BASE_URL } from '../../utils';
import { useEffect } from 'react';

export function Home() {

  const booksSearch = (searchParams) => {
    const { search, startIndex, maxResults } = searchParams;

    axios.get(`${BASE_URL}/volumes`, {
      params: {
        q: search,
        startIndex: startIndex,
        maxResults: maxResults,
        key: API_KEY
      }
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <>
      <SearchComponent
        booksSearch={booksSearch}
      />
    </>
  )
}