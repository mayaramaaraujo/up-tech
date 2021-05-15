import { Divider, Link, TablePagination, Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { Book, BookSection, BookHeader, BookImg, BookMain } from './style';

export function ResultsComponent(props) {
  const items = props.results.items;

  const handlePages = (e, newPage) => {
    props.setStartIndex(newPage);
  }

  const handleRowsPerPage = (e) => {
    props.setMaxResults(e);
  }

  return (
    <>
      <BookSection>
        {items &&
          items.map((item) => {
            console.log(item)
            return (
              <Fragment>
                <Book key={item.id}>
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
                    <Link href="">Ver mais</Link>
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
          labelRowsPerPage="Itens por página"
          backIconButtonText="Página anterior"
          nextIconButtonText="Próxima página"
        />}
    </>
  )
}