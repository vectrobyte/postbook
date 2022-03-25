import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "../lib/providers/AuthProvider";

const PrivateRoute = ({ element: RouteElement, ...rest }) => {
  const user = useContext(AuthProvider);

  console.log(user);

  return (
    <Routes>
      <Route
        {...rest}
        element={!!user ? <RouteElement /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default PrivateRoute;
