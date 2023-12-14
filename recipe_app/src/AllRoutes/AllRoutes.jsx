import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Diet from "../Pages/Diet";
import Calorie from "../Pages/Calorie";
import SinglePage from "../Pages/SinglePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/calorie" element={<Calorie />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/singlepage/:id" element={<SinglePage />} />
    </Routes>
  );
};
