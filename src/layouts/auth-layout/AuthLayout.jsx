import Navbar from "./Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
