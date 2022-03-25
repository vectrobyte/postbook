import AuthLayout from "../../layouts/auth-layout/AuthLayout";
import MainLayout from "../../layouts/main-layout/MainLayout";

const ErrorPage = ({ auth }) => {
  const layout = AuthLayout;
  if (auth) {
    const layout = AuthLayout;
  } else {
    const layout = MainLayout;
  }
  return (
    <layout>
      <div>
        <h1>Page not found!..</h1>
      </div>
    </layout>
  );
};

export default ErrorPage;
