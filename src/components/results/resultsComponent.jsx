import { TablePagination } from '@material-ui/core';

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
      <section>        
        <p>
          {items &&
            items.map((item) => {
              return item.volumeInfo.title
            })}
        </p>
      </section>

      {items ? <TablePagination
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
      />
        : 'nothing'}
    </>
  )
}