import React from "react";
import { MdMenuBook } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookie.js";

function HeadBookList() {
  const token = getCookie("token");
  const navigate = useNavigate();

  const handleClick = () => {
    if (!token) {
      navigate("/auth/login");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center">
        <MdMenuBook className="w-8 h-8" />
        <h1 className="font-normal text-3.5xl p-5">همه کتاب ها</h1>
      </div>
      <button
        onClick={handleClick}
        className="w-[154px] h-[62px] bg-[#F21055] text-white rounded-xl px-4 py-3 gap-4 font-semibold text-2.5xl"
      >
        {token ? "پنل مدیریت" : "ورود"}
      </button>
    </div>
  );
}

export default HeadBookList;
