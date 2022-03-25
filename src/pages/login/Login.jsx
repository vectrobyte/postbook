import "./Login.scss";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { authRef } from "../../services/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";

const Login = () => {
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const error = document.getElementById("Lerror");
  const handleSubmit = (e) => {
    e.preventDefault();
    const handleError = (errorText) => {
      error.style.display = "block";
      error.textContent = errorText;
      setTimeout(() => {
        error.style.display = "none";
        error.textContent = "";
      }, 3000);
    };

    if (e.target.password.value.length < 6) {
      handleError("Password must have atleast 10 characters");
      return;
    }

    signInWithEmailAndPassword(authRef, cred.email, cred.password)
      .then((res) => {
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-control error" id="Lerror"></div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              autoComplete="off"
              onChange={(e) => setCred({ ...cred, email: e.target.value })}
              name="email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
              name="password"
            />
          </div>
          <div className="form-control">
            <input type="submit" className="button" value="Login" />
          </div>
        </form>
        <p>
          Not a member? <Link to="/Signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
