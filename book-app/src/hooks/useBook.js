import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById, updateBook,
} from "../services/book.js";
import { useState } from "react";

function useBook(id) {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);

  const { data: booksData, isLoading: isBooksLoading } = useQuery({
    queryKey: ["books", currentPage],
    queryFn: () => getAllBooks(currentPage),
  });

  const { data: book, isLoading: isBookLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: () => (id ? getBookById(id) : Promise.resolve(null)),
  });

  const { data: deletedBook, isLoading: isDeletedBookLoading } = useQuery({
    queryKey: ["deletedBook", id],
    queryFn: () => (id ? deleteBook(id) : Promise.resolve(null)),
  });

  const createBookMutation = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
    onError: (error) => {
      console.error(error.response?.data?.message || "خطا در ایجاد کتاب");
    },
  });

  const updateBooks = useMutation({
    mutationFn: updateBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["updateBook"]);
    },
    onError: (error) => {
      console.error(error.response?.data?.message || "خطا در ایجاد کتاب");
    },
  })



  return {
    books: booksData?.data || [],
    totalPages: booksData?.totalPages || 0,
    currentPage,
    setCurrentPage,
    isBooksLoading,
    book,
    isBookLoading,
    deletedBook,
    isDeletedBookLoading,
    createBooks: (data) => createBookMutation.mutate(data),
    isCreatingBook: createBookMutation.isLoading,
    updateBooks: (id) => updateBooks.mutate(id),
  };
}

export default useBook;
