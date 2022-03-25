import AuthLayout from "../layouts/auth-layout/AuthLayout";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/Signup";

const routes = [
  {
    layout: AuthLayout,
    public: true,
    routes: [
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/signup",
        component: Signup,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        path: "/home",
        exact: true,
        component: Home,
      },
    ],
  },
];

export default routes;
