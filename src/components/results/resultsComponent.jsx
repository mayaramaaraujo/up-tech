import { Divider, TablePagination, Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { useHistory } from 'react-router';
import { goToPages } from '../../utils';
import { Book, BookSection, BookHeader, BookImg, BookMain, BookLink, ResultsSubtitle } from './style';

export function ResultsComponent(props) {
  const items = props.results.items;

  const handlePages = (e, newPage) => {
    props.setStartIndex(newPage);
  }

  const handleRowsPerPage = (e) => {
    props.setMaxResults(e);
  }

  const history = useHistory();

  return (
    <>
      {items &&
        <ResultsSubtitle variant="subtitle2">
          {props.results.totalItems} resultados encontrados.
        </ResultsSubtitle>
      }
      
      <BookSection>
        {items &&
          items.map((item, i) => {
            return (
              <Fragment key={i}>
                <Book>
                  <BookHeader>
                    <BookImg src={item.volumeInfo.imageLinks?.smallThumbnail} alt="" />
                  </BookHeader>
                  <BookMain>
                    <Typography variant="h5">{item.volumeInfo.title}</Typography>
                    <Typography>
                      {item.volumeInfo.description?.length > 400 ?
                        item.volumeInfo?.description.substr(0, 400) + "..." :
                        item.volumeInfo?.descriptions}
                    </Typography>
                    <BookLink href="" onClick={() => goToPages(history, `/details/${item.id}`)}>Ver mais</BookLink>
                  </BookMain>
                </Book>
                <Divider />
              </Fragment>
            );
          })}
      </BookSection>

      {items &&
        <TablePagination
          component="div"
          count={props.results.totalItems}
          page={props.startIndex}
          onChangePage={handlePages}
          rowsPerPage={props.maxResults}
          onChangeRowsPerPage={(e) => handleRowsPerPage(e)}
          rowsPerPageOptions={[10, 20, 40]}
          labelRowsPerPage="Itens"
          backIconButtonText="Página anterior"
          nextIconButtonText="Próxima página"
        />}
    </>
  )
}