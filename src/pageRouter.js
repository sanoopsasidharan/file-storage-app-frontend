import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import axios from "./axios";
import AdminHome from "./pages/Admin/AdminHome";
import Home from "./pages/Admin/HomePg";
import HomePg from "./pages/Users/HomePg";
import LoginPg from "./pages/Users/LoginPg";
import RegisterPg from "./pages/Users/RegisterPg";
import AuthContext from "./store/AuthContextProvider";
axios.defaults.withCredentials = true;

function PageRouter() {
  const { userlogged } = useContext(AuthContext);
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

        <Route path="/admin" element={<HomePg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
