import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout/AuthLayout";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/Signup";
import AuthProvider from "../lib/providers/AuthProvider";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthLayout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthLayout>
        <MainLayout>
          <PrivateRoute path="/" element={<Home />} />
        </MainLayout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
