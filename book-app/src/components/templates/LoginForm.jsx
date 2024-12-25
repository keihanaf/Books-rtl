import React, { useState } from "react";
import { loginUser } from "../../services/auth.js";
import { setCookie } from "../../utils/cookie.js";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logoo.svg";

function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
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
    try {
      const { response, error } = await loginUser(form.username, form.password);
      if (response) {
        setCookie("token", response.data.token, 1);
        navigate("/dashboard");
      } else {
        throw new Error(error || "An unexpected error occurred.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-display h-dvh flex justify-center items-center ">
      <div className="w-117.5 h-130.75 flex justify-center items-center flex-col bg-white rounded-5xl border border-borderColor">
        <img src={logo} alt="logo" />
        <h1 className="font-medium text-2.5xl text-[#282828] mt-4">ورود</h1>
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
          <button
            type="submit"
            className="w-400px h-53px rounded-2xl flex items-center justify-center px-[15px] py-[22px] gap-[10px] bg-[#F21055] hover:bg-[#f2106e] text-center mt-9 font-semibold text-white"
          >
            ورود
          </button>
        </form>
        <div className="flex justify-start w-full">
          <Link
            to="/auth/register"
            className="text-right text-[#F21055] font-normal mr-9 mt-4"
          >
            ایجاد حساب کاربری!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
