import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "./axios";
import HomePg from "./pages/HomePg";
import LoginPg from "./pages/LoginPg";
import RegisterPg from "./pages/RegisterPg";
axios.defaults.withCredentials = true;

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/login" element={<LoginPg />} />
        <Route path="/register" element={<RegisterPg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
