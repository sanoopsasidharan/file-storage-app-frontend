import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import axios from "./axios";
import Home from "./pages/Admin/Home";
import Login from "./pages/Admin/Login";
import HomePg from "./pages/Users/HomePg";
import LoginPg from "./pages/Users/LoginPg";
import RegisterPg from "./pages/Users/RegisterPg";
import AdminAuthContext from "./store/AdminAuthContextProvider";
import AuthContext from "./store/AuthContextProvider";
axios.defaults.withCredentials = true;

function PageRouter() {
  const { userlogged } = useContext(AuthContext);
  const { adminLogged } = useContext(AdminAuthContext);
  console.log(adminLogged, "admin in page");

  console.log(userlogged, "userlogged in page");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={userlogged ? <HomePg /> : <Navigate to="/login" />}
        />

        {/* <Route path="/login" element={<LoginPg />} /> */}
        <Route
          path="/login"
          element={userlogged ? <Navigate to="/" /> : <LoginPg />}
        />

        <Route path="/register" element={<RegisterPg />} />

        {/* admin routes */}
        <Route
          path="/admin/login"
          element={adminLogged ? <Navigate to="/admin" /> : <Login />}
        />
        <Route
          path="/admin"
          element={adminLogged ? <Home /> : <Navigate to="/admin/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
