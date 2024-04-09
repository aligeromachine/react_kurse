import React, { useContext } from "react";
import St from "../styles/App.module.css"
import MyInp from "../components/UI/input/MyInp";
import MyBtn from "../components/UI/button/MyBtn";
import { AuthContext } from "../context/context";

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
  }
  return(
    <div className={St.root}>
      <h1>Authentication User</h1>
      <form onSubmit={login}>
        <MyInp type="text" placeholder="input login"></MyInp>
        <MyInp type="password" placeholder="input password"></MyInp>
        <MyBtn>Login</MyBtn>
      </form>
    </div>
  );
}

export default Login;