import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import Spinner from "./spinner/Spinner.jsx";
import withModalHandler from "../HOC/withModalHandler.jsx";

function TableOfBooks({
  books,
  isBooksLoading,
  openModal,
}) {
  return (
    <div className="overflow-hidden rounded-[30px] mt-4">
      <table className="w-full bg-white">
        <thead className="bg-[#F2F2F2] h-16">
          <tr>
            <th className="pr-10 text-right font-medium text-[#282828] text-xl">
              نام کتاب
            </th>
            <th className="pr-10 text-center font-medium text-[#282828] text-xl">
              موجودی
            </th>
            <th className="pr-10 text-center font-medium text-[#282828] text-xl">
              قیمت
            </th>
            <th className="pr-10 text-center font-medium text-[#282828] text-xl">
              شناسه کالا
            </th>
            <th className="pr-10 text-right font-medium text-[#282828] text-xl"></th>
          </tr>
        </thead>
        <tbody className="h-16">
          {isBooksLoading ? (
            <tr>
              <td colSpan={5} className="text-center">
                <Spinner />
              </td>
            </tr>
          ) : Array.isArray(books) && books.length > 0 ? (
            books.map((book) => (
              <tr className="border-b border-[#F2F2F2] h-16" key={book.id}>
                <td className="pr-10 text-right">{book.title}</td>
                <td className="pr-10 text-center">{book.quantity}</td>
                <td className="pr-10 text-center">{book.price}</td>
                <td className="pr-10 text-center">{book.id}</td>
                <td>
                  <button className="ml-2" onClick={() => openModal("update", book.id)}>
                    <FaRegEdit className="text-[#4ADE80] w-5 h-5" />
                  </button>
                  <button
                    className="mr-2"
                    onClick={() => openModal("delete", book.id)}
                  >
                    <LuTrash2 className="text-[#F43F5E] w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                کتابی برای نمایش وجود ندارد.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default withModalHandler(TableOfBooks);
