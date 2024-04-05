import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  });

  // Functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      alert("Register successful");
      axios
        .post("http://localhost:3000/register", user)
        .then((res) => console.log(res));
      history.push("/login");
    } else {
      alert("Register Fail");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={register}>
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter your name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter your Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your Password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <button type="submit" className="register-button">
          Register
        </button>
        <div>or</div>
        <button
          type="button"
          className="login-button"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
