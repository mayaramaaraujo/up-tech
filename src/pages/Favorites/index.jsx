import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL, goToPages } from '../../utils';
import { Divider, Typography } from '@material-ui/core';
import { Book, BookImg, BookLink, BookMain, BookSection, FavoritePage } from './style'
import { BookHeader } from '../../components/results/style';
import { useHistory } from 'react-router';
import { ArrowBack, DetailsHeader, HeaderContainer } from '../Details/style';

export function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const history = useHistory();

  const loadFavorites = () => {
    Object.keys(window.localStorage).map((fav) => {
      axios.get(`${BASE_URL}/volumes/${fav}`, {
        params: {
          key: API_KEY
        }
      })
        .then((res) => {
          setFavorites(favorites => [...favorites, res.data]);
        })
        .catch(err => console.log(err))
    })
  }


  useEffect(() => {
    loadFavorites();
  }, [])

  return (
    <FavoritePage>

      <HeaderContainer>
        <DetailsHeader>
          <ArrowBack onClick={() => goToPages(history, "/")} />
          <Typography variant="h5">Voltar</Typography>
        </DetailsHeader>
      </HeaderContainer>

      <Typography variant="h2">Favoritos</Typography>

      <BookSection>
        {favorites ? favorites.map((fav, i) => {
          return (
            <Book key={i}>
              <BookHeader>
                <BookImg src={fav.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
              </BookHeader>
              <BookMain>
                <Typography variant="h5">{fav.volumeInfo.title}</Typography>
                <Typography>
                  {fav.volumeInfo.description?.length > 400 ?
                    fav.volumeInfo?.description.substr(0, 400) + "..." :
                    fav.volumeInfo?.descriptions}
                </Typography>
                <BookLink href="" onClick={() => goToPages(history, `/details/${fav.id}`)}>Ver mais</BookLink>
              </BookMain>
              <Divider />
            </Book>
          )
        }) : "Nenhum fav"}
      </BookSection>
    </FavoritePage>
  )
}