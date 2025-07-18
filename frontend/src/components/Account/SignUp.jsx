import { useState } from "react";
import { signupUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupUser(formData);
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate("/users/login");
      }, 1200);
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during signup."
      );
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        {success && <div className="alert success">Signup successful!</div>}
        {error && <div className="alert error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            name="userName"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <input name="address" placeholder="Address" onChange={handleChange} />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
