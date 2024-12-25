import React from "react";
import LoginForm from "../components/templates/LoginForm.jsx";
import RegisterForm from "../components/templates/RegisterForm.jsx";
import { useLocation } from "react-router-dom";

function AuthPage() {
  const location = useLocation();
  const isRegister = location.pathname === "/auth/register";

  return isRegister ? <RegisterForm /> : <LoginForm />;
}
export default AuthPage;
