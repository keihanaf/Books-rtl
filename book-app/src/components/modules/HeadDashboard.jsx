import React from "react";
import { RiListSettingsLine } from "react-icons/ri";
import withModalHandler from "../HOC/withModalHandler.jsx";

function HeadDashboard({ openModal }) {
  return (
    <div className="mt-11 flex justify-between items-center">
      <div className="flex justify-start items-center">
        <RiListSettingsLine className="w-8 h-8" />
        <h1 className="font-normal text-3.5xl p-5">مدیریت کتاب ها</h1>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => openModal("create")}
          className="w-[132px] h-[45px] bg-[#F21055] text-white rounded-xl gap-4 font-normal p-2.5 text-base"
        >
          افزودن کتاب
        </button>
      </div>
    </div>
  );
}

// استفاده از withModalHandler هنگام اکسپورت کامپوننت
export default withModalHandler(HeadDashboard);
