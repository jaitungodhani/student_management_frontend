import { Button } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/home";

function App() {

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
        <Route path="/*" element={
            <div>Hello, Jaitun</div>
          } />
          <Route path="/" element={
            <Home />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
