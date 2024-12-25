import React, { useState } from "react";
import { useModal } from "../../context/ModalContext.jsx";
import deleteLogo from "../../assets/deleteLogo.svg"

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

const withModalHandler = (WrappedComponent) => {
  const WithModalHandler = (props) => {
    const { openModal, closeModal, isModalOpen, modalType } = useModal();
    const [selectedBookId, setSelectedBookId] = useState(null);
    const [formData, setFormData] = useState({
      title: "",
      quantity: "",
      price: "",
    });

    const handleOpenModal = (type, bookId = null) => {
      setSelectedBookId(bookId); // ذخیره شناسه کتاب
      openModal(type);
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    return (
      <>
        <WrappedComponent
          {...props}
          openModal={handleOpenModal}
          closeModal={closeModal}
          selectedBookId={selectedBookId}
        />

        {/* نمایش مودال بر اساس نوع */}
        {isModalOpen && (
          <div
            data-testid="modal-backdrop"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-[30px]"
              onClick={(e) => e.stopPropagation()}
            >
              {modalType === "create" && (
                <div className="w-460px h-[28rem] flex flex-col justify-center items-center">
                  <h2 className="font-medium text-center text-1.5xl mb-5">
                    ایجاد محصول جدید
                  </h2>
                  <div className="flex flex-col text-[#282828]">
                    <label>نام کتاب</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="نام کتاب"
                      className="w-[389px] h-[42px] bg-[#F2F2F2] rounded-lg p-2 mt-2"
                    />
                    <label className="mt-9">تعداد موجودی</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder="تعداد موجودی"
                      className="w-[389px] h-[42px] bg-[#F2F2F2] rounded-lg p-2 mt-2"
                    />
                    <label className="mt-9">قیمت</label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="قیمت"
                      className="w-[389px] h-[42px] bg-[#F2F2F2] rounded-lg p-2 mt-2"
                    />
                  </div>
                  <div className="flex justify-between items-center gap-2.5 mt-9">
                    <button
                      onClick={() => {
                        if (props.createBook) {
                          props.createBook(formData);
                          setFormData({ title: "", quantity: "", price: "" });
                          closeModal();
                        }
                      }}
                      className="bg-[#F21055] text-white p-2.5 rounded-[10px] w-[185px] h-[42px] font-medium"
                    >
                      ایجاد
                    </button>
                    <button
                      onClick={closeModal}
                      className="bg-[#DFDFDF] text-[#282828CC] p-2.5 rounded-[10px] w-[185px] h-[42px] font-medium"
                    >
                      انصراف
                    </button>
                  </div>
                </div>
              )}
              {modalType === "update" && (
                <div className="w-460px h-[28rem] flex flex-col justify-center items-center">
                  <div className="flex justify-center items-center bg-[#F21055] rounded-2xl p-5 text-white">
                    <h2 className="text-2.5xl">ویرایش کتاب ها فعلا در دسترس نمیباشد</h2>
                  </div>
                  {/*<h2 className="font-medium text-center text-1.5xl mb-5">*/}
                  {/*  ویرایش محصول*/}
                  {/*</h2>*/}
                  {/*<div className="flex flex-col text-[#282828]">*/}
                  {/*  <label>نام کتاب</label>*/}
                  {/*  <input*/}
                  {/*    type="text"*/}
                  {/*    name="title"*/}
                  {/*    value={formData.title}*/}
                  {/*    onChange={handleInputChange}*/}
                  {/*    placeholder="نام کتاب"*/}
                  {/*    className="w-[389px] h-[42px] bg-[#F2F2F2] rounded-lg p-2 mt-2"*/}
                  {/*  />*/}
                  {/*  <label className="mt-9">تعداد موجودی</label>*/}
                  {/*  <input*/}
                  {/*    type="text"*/}
                  {/*    name="quantity"*/}
                  {/*    value={formData.quantity}*/}
                  {/*    onChange={handleInputChange}*/}
                  {/*    placeholder="تعداد موجودی"*/}
                  {/*    className="w-[389px] h-[42px] bg-[#F2F2F2] rounded-lg p-2 mt-2"*/}
                  {/*  />*/}
                  {/*  <label className="mt-9">قیمت</label>*/}
                  {/*  <input*/}
                  {/*    type="text"*/}
                  {/*    name="price"*/}
                  {/*    value={formData.price}*/}
                  {/*    onChange={handleInputChange}*/}
                  {/*    placeholder="قیمت"*/}
                  {/*    className="w-[389px] h-[42px] bg-[#F2F2F2] rounded-lg p-2 mt-2"*/}
                  {/*  />*/}
                  {/*</div>*/}
                  {/*<div className="flex justify-between items-center gap-2.5 mt-9">*/}
                  {/*  <button*/}
                  {/*    onClick={() => {*/}
                  {/*      if (props.updateBook) {*/}
                  {/*        props.updateBook(selectedBookId, formData);*/}
                  {/*        setFormData({ title: "", quantity: "", price: "" });*/}
                  {/*        closeModal();*/}
                  {/*      }*/}
                  {/*    }}*/}
                  {/*    className="bg-[#F21055] text-white p-2.5 rounded-[10px] w-[185px] h-[42px] font-medium"*/}
                  {/*  >*/}
                  {/*    ذخیره تغییرات*/}
                  {/*  </button>*/}
                  {/*  <button*/}
                  {/*    onClick={closeModal}*/}
                  {/*    className="bg-[#DFDFDF] text-[#282828CC] p-2.5 rounded-[10px] w-[185px] h-[42px] font-medium"*/}
                  {/*  >*/}
                  {/*    انصراف*/}
                  {/*  </button>*/}
                  {/*</div>*/}
                </div>
              )}
              {modalType === "delete" && (
                <div className="w-[472px] h-[338px] flex flex-col justify-center items-center">
                  <div className="mt-11">
                    <img src={deleteLogo} alt="deleteLogo" />
                  </div>
                  <div className="mt-16">
                    <h2 className="font-normal text-[#282828] text-center text-1.5xl">آیا از حذف این کتاب مطمئنید؟</h2>
                  </div>
                  <div className="flex justify-between items-center gap-2.5 mt-6">
                    <button
                        className="bg-[#E31215] text-white p-2.5 rounded-[10px] w-[185px] h-[42px] font-medium opacity-50 cursor-not-allowed"
                        disabled
                    >
                      حذف
                    </button>
                    <button
                        onClick={closeModal}
                        className="bg-[#DFDFDF] text-[#282828CC] p-2.5 rounded-[10px] w-[185px] h-[42px] font-medium"
                    >
                      لغو
                    </button>
                  </div>
                  {/*<h2>آیا مطمئن هستید که می‌خواهید این کتاب را حذف کنید؟</h2>*/}
                  {/*<button*/}
                  {/*  onClick={() => {*/}
                  {/*    props.deleteBook(selectedBookId); // فراخوانی تابع حذف*/}
                  {/*    console.log(selectedBookId);*/}
                  {/*    closeModal();*/}
                  {/*  }}*/}
                  {/*  className="bg-red-500 text-white px-4 py-2 rounded"*/}
                  {/*>*/}
                  {/*  تایید حذف*/}
                  {/*</button>*/}
                  {/*<button*/}
                  {/*  onClick={closeModal}*/}
                  {/*  className="bg-gray-300 text-black px-4 py-2 rounded ml-2"*/}
                  {/*>*/}
                  {/*  لغو*/}
                  {/*</button>*/}
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  };

  WithModalHandler.displayName = `WithModalHandler(${getDisplayName(WrappedComponent)})`;
  return WithModalHandler;
};

export default withModalHandler;
