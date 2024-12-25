import api from "../configs/api.js";

export const getAllBooks = async (page = 1) => {
  try {
    const response = await api.get(`book?page=${page}`);
    return response.data;
  } catch (error) {
    return { error };
  }
};

export const getBookById = async (id) => {
  try {
    const response = await api.get(`book/${id}`);
    return response.data.data;
  } catch (error) {
    return { error };
  }
};

export const createBook = async (bookData) => {
  try {
    const response = await api.post("book", bookData);
    return response.data.data;
  } catch (error) {
    return { error };
  }
};

export const updateBook = async (id) => {
  try {
    const response = await api.put(`book/${id}`);
    return response.data.data;
  } catch (error) {
    return { error };
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await api.delete(`book/${id}`);
    return response.data.data;
  } catch (error) {
    return { error };
  }
};

export const deleteAllBooks = async () => {
  try {
    const response = await api.delete("book");
    return response.data.data;
  } catch (error) {
    return { error };
  }
};
