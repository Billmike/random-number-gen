import React from 'react';
import Paginate from 'react-paginate';
import './Pagination.css';

const Pagination = ({pages, handlePageClick}) => {
  return (
    <Paginate
      onPageChange={handlePageClick}
      pageRangeDisplayed={pages > 5 ? 6 : pages}
      previousLabel="<"
      nextLabel=">"
      breakLabel={<a href="">...</a>}
      pageCount={pages}
      containerClassName="pagination-class justify-content-center"
      pageClassName="page-item page-numbers-style"
      pageLinkClassName="page-link"
      nextClassName="page-item next-button"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      disabledClassName="disabled"
      activeClassName="active"
    />
  )
}

export default Pagination;
