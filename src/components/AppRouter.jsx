import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import Post from "../pages/Post";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/training-shop" element={<Main></Main>}></Route>
      <Route path="training-shop/post" element={<Post></Post>}></Route>
      <Route path="*" element={<Navigate to="/training-shop" replace />} />
    </Routes>
  );
};

export default AppRouter;
