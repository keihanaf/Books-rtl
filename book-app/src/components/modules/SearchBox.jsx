import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { removeCookie } from "../../utils/cookie.js";
import { useNavigate } from "react-router-dom";

function SearchBox({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const removeCookieHandler = () => {
    removeCookie("token");
    navigate("/");
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex justify-center items-center border bg-white border-borderColor rounded-2xl h-16  w-full">
      <div className="flex-grow flex items-center px-4">
        <RiSearchLine className="w-6 h-6 ml-2 text-[#282828]" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="جستجو کالا"
          className="w-full focus:outline-none text-base text-right font-normal bg-white placeholder-gray-400"
        />
      </div>
      <div className="transition ease-in-out border-r border-gray-300 hover:scale-110 h-10 px-8 flex justify-center items-center">
        <div className="flex justify-center px-2">
          <button onClick={removeCookieHandler}>خروج</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
