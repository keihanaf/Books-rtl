import React from "react";
import HeadBookList from "../modules/HeadBookList.jsx";
import Books from "../modules/Books.jsx";
import Pagination from "../modules/Pagination.jsx";
import useBook from "../../hooks/useBook.js";

function BookList() {
  const { books, totalPages, currentPage, setCurrentPage, isBooksLoading } =
    useBook();

  return (
    <>
      <HeadBookList />
      <Books
        books={books}
        isBooksLoading={isBooksLoading}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default BookList;
