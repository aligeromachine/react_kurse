import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {Route, Routes} from 'react-router-dom';
import PostIdPages from "../pages/PostIdPages";

const AppRoute = () => {
  return (
    <Routes>        
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostIdPages />} />
        <Route path="*" component={<Error />} />
      </Routes>   
  );
}

export default AppRoute;