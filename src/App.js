import React from "react";
import './styles/post.css';
import {BrowserRouter} from 'react-router-dom';

import Navbar from "./components/UI/navbar/Navbar";
import AppRoute from "./components/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoute/>
    </BrowserRouter>
    
  );
}

export default App;


