import React, { useEffect, useState } from "react";
import './styles/post.css';
import {BrowserRouter} from 'react-router-dom';

import Navbar from "./components/UI/navbar/Navbar";
import AppRoute from "./components/AppRoute";
import { AuthContext } from "./context/context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth") === "true"){
      setIsAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <BrowserRouter>
        <Navbar/>
        <AppRoute/>
      </BrowserRouter>      
    </AuthContext.Provider>
  );
}

export default App;


