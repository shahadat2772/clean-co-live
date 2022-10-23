import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = false;
  const location = useLocation();

  if (!user) {
    console.log(user);
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
