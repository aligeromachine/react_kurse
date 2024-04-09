import React, { useContext } from "react";
import {Route, Routes} from 'react-router-dom';
import { private_routes, public_routes } from "../routes/routes";
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "../context/context";

const AppRoute = () => {
  const {isAuth} = useContext(AuthContext);
  return (
    <Routes>
      {isAuth 
        ? private_routes.map(route => 
          <Route 
            path={route.path} 
            element={route.element} 
            exact={route.exact}
            key={uuidv4()}
            />
        ) 
        : public_routes.map(route => 
          <Route 
            path={route.path} 
            element={route.element} 
            exact={route.exact}
            key={uuidv4()}
            />
        )}        
           
      </Routes>   
  );
}

export default AppRoute;