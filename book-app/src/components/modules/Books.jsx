import React, {useEffect, useState} from "react";
import { TbShoppingCart } from "react-icons/tb";
import Spinner from "./spinner/Spinner.jsx";
import {getAllBooks} from "../../services/book.js";
import image from "../../assets/img.png";
import {toast} from "react-toastify";

function Books({ books, isBooksLoading }) {
  const [bookss, setBookss] = useState([]);
  useEffect( () => {
    const fetchBooks = async () => {
      const {data} = await getAllBooks();
      setBookss(data);
    };
    fetchBooks();
  }, []);
  console.log(bookss);
  const handleClick = () => {
    toast.warning(" در حال حاضر این صفحه موجود نمی‌باشد", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


  return (
    <div>
      {isBooksLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-lg p-4 cursor-pointer flex flex-col"
              onClick={() => handleClick(book)}
            >
              <img
                src={image}
                alt={book.title}
                className="w-[128px] h-[140px] object-cover text-center mx-auto"
              />
              <div className="pt-4">
                <h2 className="text-1.5xl text-[#282828] font-normal text-center">
                  {book.title}
                </h2>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#282828] text-right font-normal text-sm">{book.price} هزار تومن </p>
                  <TbShoppingCart className="w-[22px] h-[22px] text-[#F21055]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
