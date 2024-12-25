import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout.jsx";

import NotFoundPage from "../pages/404.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import HomePage from "../pages/HomePage.jsx";

import { getCookie } from "../utils/cookie.js";
import DashboardPage from "../pages/DashboardPage.jsx";

function Router() {
  const token = getCookie("token");
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route
        path="/auth/login"
        element={!token ? <AuthPage /> : <Navigate to={"/"} />}
      />
      <Route
        path="/auth/register"
        element={!token ? <AuthPage /> : <Navigate to={"/"} />}
      />
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}
export default Router;
