import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { API_KEY, BASE_URL, goToPages } from '../../utils';
import { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { ArrowBack, BookActions, BookDescription, BookDetailsMain, BookDetaisFooter, BookInfo, DetailsHeader, DetailsPage, Favorite, FavoriteButton, HeaderContainer, NotFavorite } from './style';

export function Details() {
  const history = useHistory();
  let { id } = useParams();
  
  const [book, setBook] = useState();
  const [isFavorite, setFavorite] = useState(false);

  const loadBookDetails = () => {
    axios.get(`${BASE_URL}/volumes/${id}`, {
      params: {
        key: API_KEY
      }
    })
      .then(res => setBook(res.data))
      .catch(err => console.log(err))
  }

  const addToFavorites = (bookId, favorite) => {
    setFavorite(!isFavorite)
    window.localStorage.setItem(bookId, JSON.stringify(favorite))
  }

  const removeFromFavorites = (favorite) => {
    setFavorite(!isFavorite)
    window.localStorage.removeItem(favorite);
  }

  useEffect(() => {
    loadBookDetails();
  }, [isFavorite])

  return (
    <DetailsPage>
      {book &&
        <>
          <HeaderContainer>
            <DetailsHeader>
              <ArrowBack onClick={() => goToPages(history, "/")} />
              <Typography variant="h5">Voltar</Typography>
            </DetailsHeader>
          </HeaderContainer>

          <BookDetailsMain>
            <img src={book?.volumeInfo?.imageLinks?.small} alt="" />
            <BookDescription>
              <Typography variant="h4">{book?.volumeInfo?.title}</Typography>
              <Typography variant="subtitle1">{book?.volumeInfo?.subtitle}</Typography>
              <Typography paragraph>{book?.volumeInfo?.description}</Typography>
              <BookDetaisFooter>
                <div>
                  <Typography variant="h6">{book?.volumeInfo?.authors?.length > 1 ? "Autores" : "Autor"}</Typography>
                  <Typography variant="subtitle1">{book?.volumeInfo?.authors?.map(author => author + " ")}</Typography>
                </div>
                <BookInfo>
                  <Typography variant="subtitle1"><strong>Data de publicação:</strong> {book?.volumeInfo?.publishedDate}</Typography>
                  <Typography variant="subtitle1"><strong>Quantidade de páginas:</strong> {book?.volumeInfo?.pageCount}</Typography>
                </BookInfo>
              </BookDetaisFooter>
            </BookDescription>
          </BookDetailsMain>

          <BookActions>
            <FavoriteButton variant="outlined" color="secondary" onClick={() => goToPages(history, "/favorites")}>
              ver favoritos
            </FavoriteButton>
            <FavoriteButton variant="contained" href={book?.volumeInfo?.infoLink} color="secondary" >
              Comprar
            </FavoriteButton>
            {isFavorite ?
              <Favorite>
                <FavoriteIcon onClick={() => removeFromFavorites(book.id)} />
              </Favorite> :
              <NotFavorite>
                <FavoriteBorderIcon onClick={() => addToFavorites(book.id, book)} />
              </NotFavorite>}
          </BookActions>

        </>
      }
    </DetailsPage>
  )
}