import React from 'react';
import Fetch from "./pages/Fetch";
import Clock from "./Pages/Clock";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/fetch" element={<Fetch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
