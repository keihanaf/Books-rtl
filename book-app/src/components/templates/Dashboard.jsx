import React, { useEffect, useState, useMemo } from "react";
import SearchBox from "../modules/SearchBox.jsx";
import HeadDashboard from "../modules/HeadDashboard.jsx";
import TableOfBooks from "../modules/TableOfBooks.jsx";
import Pagination from "../modules/Pagination.jsx";
import useBook from "../../hooks/useBook.js";
import {deleteBook} from "../../services/book.js";

function Dashboard() {
  const { books, totalPages, currentPage, setCurrentPage, isBooksLoading, createBooks, updateBooks } =
    useBook();
  const [localBooks, setLocalBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLocalBooks(books);
  }, [books]);

  const handleDeleteBook = async (id) => {
    const result = await deleteBook(id);
    if (!result.error) {
      setLocalBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } else {
      console.error("حذف کتاب با خطا مواجه شد", result.error);
    }
  };

  const handleCreateBook = (bookData) => {
    try {
      createBooks(bookData);
    } catch (error) {
      console.error("ایجاد کتاب با خطا مواجه شد", error);
    }
  };

  const handleUpdateBook = (id) => {
    try {
      updateBooks(id);
    } catch (error) {
      console.error("ویرایش کتاب با خطا مواجه شد", error);
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredBooks = useMemo(() => {
    if (!localBooks) return [];

    return localBooks.filter((book) => {
      if (!book) return false;

      const searchLower = searchQuery.toLowerCase();
      const titleMatch =
        book.title?.toLowerCase()?.includes(searchLower) || false;
      const priceMatch = book.price?.toString()?.includes(searchLower) || false;

      return titleMatch || priceMatch;
    });
  }, [localBooks, searchQuery]);

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <HeadDashboard />
      <TableOfBooks
        books={filteredBooks}
        isBooksLoading={isBooksLoading}
        deleteBook={handleDeleteBook}
        createBook={handleCreateBook}
        updateBook={handleUpdateBook}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default Dashboard;
