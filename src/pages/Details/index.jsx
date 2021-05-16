import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { API_KEY, BASE_URL, goToPages } from '../../utils';
import { useEffect, useState } from 'react';
import { Link, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { ArrowBack, BookActions, BookDescription, BookDetailsMain, BookDetaisFooter, BookInfo, BuyLink, DetailsHeader, DetailsPage, Favorite, NotFavorite } from './style';

export function Details() {
  const history = useHistory();
  const [book, setBook] = useState();
  let { id } = useParams();
  const [isFavorite, setFavorite] = useState(false);

  const loadBookDetails = () => {
    axios.get(`${BASE_URL}/volumes/${id}`, {
      params: {
        key: API_KEY
      }
    })
      .then(res => setBook(res.data.volumeInfo))
      .catch(err => console.log(err))
  }

  const addToFavorites = () => {
    setFavorite(!isFavorite)
  }

  useEffect(() => {
    loadBookDetails();
  }, [])

  return (
    <DetailsPage>
      {book &&
        <>
          <DetailsHeader>
            <ArrowBack onClick={() => goToPages(history, "/")} />
            <Typography variant="h5">Voltar</Typography>
          </DetailsHeader>
          <BookDetailsMain>
            <img src={book?.imageLinks?.small} alt="" />
            <BookDescription>
              <Typography variant="h4">{book.title}</Typography>
              <Typography variant="subtitle1">{book?.subtitle}</Typography>
              <Typography paragraph>{book?.description}</Typography>
              <BookDetaisFooter>
                <div>
                  <Typography variant="h6">{book?.authors.length > 1 ? "Autores" : "Autor"}</Typography>
                  <Typography variant="subtitle1">{book?.authors.map(author => author + " ")}</Typography>
                </div>
                <BookInfo>
                  <Typography variant="subtitle1"><strong>Data de publicação:</strong> {book?.publishedDate}</Typography>
                  <Typography variant="subtitle1"><strong>Quantidade de páginas:</strong> {book?.pageCount}</Typography>
                </BookInfo>
              </BookDetaisFooter>
            </BookDescription>
          </BookDetailsMain>

          <BookActions>
            <BuyLink>
              <Link href={book?.infoLink}>Comprar</Link>
            </BuyLink>
            {isFavorite ?
              <Favorite>
                <FavoriteIcon onClick={() => addToFavorites()} />
              </Favorite> :
              <NotFavorite>
                <FavoriteBorderIcon onClick={() => addToFavorites()} />
              </NotFavorite>}
          </BookActions>
        </>
      }
    </DetailsPage>
  )
}