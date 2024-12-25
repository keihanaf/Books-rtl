import React, { createContext, useContext, useState } from "react";


const ModalContext = createContext();


export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalType, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// استفاده از Context در کامپوننت‌ها
export const useModal = () => useContext(ModalContext);
