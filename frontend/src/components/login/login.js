import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    // Function to submit form
    async function submit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/login", user);
            if (res.data === 'Exist') {
                history.push("/home");
            } else if (res.data === 'NotExist') {
                alert("Details are not valid");
            }
        } catch (e) {
            alert("Wrong details");
            console.log(e);
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <input type='text' name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
                <button type="submit" className="login-button">Login</button>
            </form>
            <div>or</div>
            <button className="register-button" onClick={() => { history.push("/register") }}>Register</button>
        </div>
    );
}

export default Login;
