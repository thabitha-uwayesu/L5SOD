import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  
  const handleLogin = (e) => {
    e.preventDefault();

    if (name === "hymidi" && password === "2007") {
      setMessage("Login Successful");

      
      navigate("/dashboard");
    } else {
      setMessage("Invalid name or password");
    }
  };

  return (
    <center>
      <div>
        <h2>Login</h2>

      
        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br /><br />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />

          
          <button type="submit">
            Login
          </button>

        </form>

        <p>{message}</p>

        <br />

        <button>
          <Link to="/" className="text-decoration-none">
            Back
          </Link>
        </button>

      </div>
    </center>
  );
}

export default Login;