import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPages from "../pages/PostIdPages";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const private_routes = [
  {path: '/about', element: <About />, exact: true},
  {path: '/posts', element: <Posts />, exact: true},
  {path: '/login', element: <Posts />, exact: true},
  {path: '/posts/:id', element: <PostIdPages />, exact: true},
  {path: '*', element: <Error />, exact: true},
]

export const public_routes = [
  {path: '/login', element: <Login />, exact: true},
  {path: '*', element: <Login />, exact: true},
]