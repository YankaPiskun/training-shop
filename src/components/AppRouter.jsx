import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import Post from "../pages/Post";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="post/main" element={<Main></Main>}></Route>
      <Route path="/post" element={<Post></Post>}></Route>
      <Route path="*" element={<Navigate to="/post" replace />} />
    </Routes>
  );
};

export default AppRouter;
