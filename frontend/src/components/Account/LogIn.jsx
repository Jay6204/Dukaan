import {  useContext, useState } from "react";
import { loginUser } from "../../services/api";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { Context } from "../../services/context";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const {user, setUser } = useContext(Context);
  const [success, setSuccess] = useState("");

    const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await loginUser(credentials);
    setUser(res);
    localStorage.setItem("user", JSON.stringify(res));
    setSuccess(`Welcome, ${res.userName}`);
    navigate("/"); // Redirect
  } catch (err) {
    setError("Invalid credentials");
  }
};


  return (
    <div className="login-container">
      <h2>Login</h2>

      {success && <div className="alert success">{success}</div>}
      {error && <div className="alert error">{error}</div>}

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
