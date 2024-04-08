import React from "react";
import {Link} from 'react-router-dom';
import st from "../../../styles/App.module.css";

const Navbar = () => {
  return(
    <div className={st.navbar}>
      <nav className={st.navbar__links}>
        <Link to="/about">About </Link>
        <Link to="/posts"> Posts</Link>     
      </nav>
    </div>
  );
}

export default Navbar;