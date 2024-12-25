import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-1/3"
        onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن مودال با کلیک روی محتوا
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
