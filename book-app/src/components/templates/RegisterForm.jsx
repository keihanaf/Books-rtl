import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth.js";
import { validateField, validateForm } from "../../utils/validation.js";
import logo from "../../assets/logoo.svg";
import { toast } from "react-toastify";

function RegisterForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });
  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm((data) => ({
      ...data,
      [name]: value.trim(),
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const currentErrors = validateForm(form);

    if (currentErrors.username) {
      toast.error(currentErrors.username);
      return;
    }
    if (currentErrors.password) {
      toast.error(currentErrors.password);
      return;
    }
    if (form.password !== form.repeatPassword) {
      toast.error(".رمز عبور و تکرار آن باید برابر باشند");
      return;
    }

    try {
      const { response, error } = await registerUser(
        form.username,
        form.password,
      );
      if (response) {
        navigate("/auth/login");
      } else {
        throw new Error(error || "An unexpected error occurred.");
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-display h-dvh flex justify-center items-center ">
      <div className="w-460px h-596px flex justify-center items-center flex-col bg-white rounded-5xl border border-borderColor">
        <img src={logo} alt="logo" />
        <h1 className="font-medium text-2.5xl text-[#282828] mt-4">
          فرم ثبت نام
        </h1>
        <form
          onSubmit={submitHandler}
          className="mt-10 flex flex-col items-center"
        >
          <div className="mt-12">
            <input
              type="text"
              name="username"
              placeholder="نام کاربری"
              value={form.username}
              onChange={changeHandler}
              className="w-400px h-53px rounded-2xl font-normal bg-[#F2F2F2] px-[15px] py-[22px] gap-[10px]"
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              name="password"
              placeholder="رمز عبور"
              value={form.password}
              onChange={changeHandler}
              className="w-400px h-53px rounded-2xl font-normal bg-[#F2F2F2] px-[15px] py-[22px] gap-[10px]"
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              name="repeatPassword"
              placeholder="تکرار رمز عبور"
              value={form.repeatPassword}
              onChange={changeHandler}
              className="w-400px h-53px rounded-2xl font-normal bg-[#F2F2F2] px-[15px] py-[22px] gap-[10px]"
            />
          </div>
          <button
            type="submit"
            className="w-400px h-53px rounded-2xl flex items-center justify-center px-[15px] py-[22px] gap-[10px] bg-[#F21055] hover:bg-[#f2106e] text-center mt-9 font-semibold text-white"
          >
            ثبت نام
          </button>
        </form>
        <div className="flex justify-start w-full">
          <Link
            to="/auth/login"
            className="text-right text-[#F21055] font-normal mr-9 mt-4"
          >
            حساب کاربری دارید؟
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
