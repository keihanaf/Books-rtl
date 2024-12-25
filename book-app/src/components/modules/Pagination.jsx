import React from "react";

function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <div>
      <ul className="flex justify-center items-center mt-8">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded-full cursor-pointer ${
              currentPage === index + 1
                ? "bg-[#F21055] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
