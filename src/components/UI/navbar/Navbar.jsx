import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import st from "../../../styles/App.module.css";
import MyBtn from "../button/MyBtn";
import { AuthContext } from "../../../context/context";

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext);
  return(
    <div className={st.navbar}>
      <MyBtn onClick={() => setIsAuth(false)}>Exit</MyBtn>
      <nav className={st.navbar__links}>
        <Link to="/about">About </Link>
        <Link to="/posts"> Posts</Link>     
      </nav>
    </div>
  );
}

export default Navbar;